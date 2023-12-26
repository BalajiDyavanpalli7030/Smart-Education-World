from flask import Flask
from flask import Flask, render_template, request, redirect, url_for, jsonify
from flask_mysqldb import MySQL
from flask_cors import CORS
from flask import send_file
import base64
from werkzeug.utils import secure_filename
app = Flask(__name__)
CORS(app, origins=['http://localhost:3000'])
# MySQL Configuration
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '' # use password
app.config['MYSQL_DB'] = 'images'


mysql = MySQL(app)

def setup_database():
     # Create the 'images' database if it doesn't exist
    with app.app_context():
        cur = mysql.connection.cursor()
        cur.execute("CREATE DATABASE IF NOT EXISTS images")
        cur.execute("USE images")

        # Check if the 'images' table already exists
        cur.execute("SHOW TABLES LIKE 'images'")
        table_exists = cur.fetchone()

        # If 'images' table doesn't exist, create it
        if not table_exists:
            cur.execute("""
                CREATE TABLE images (
                    id INT PRIMARY KEY AUTO_INCREMENT,
                    category VARCHAR(255),
                    image LONGBLOB,
                    description VARCHAR(255)
                )
            """)
            mysql.connection.commit()

        cur.close()

# Call the setup function to create the database and table
setup_database()

@app.route('/')
def index():
    return render_template('upload.html')

@app.route('/upload', methods=['POST'])
def upload():
    try:
        # Get image data from the form
        category = 'space'# request.form['category'] 
        image_data = request.files['image'].read()
        description = request.form['description']
        # Insert data into MySQL database
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO images (category, image, description) VALUES (%s, %s,%s)", (category,image_data, description))
        mysql.connection.commit()
        cur.close()

        return redirect(url_for('index'))
    except Exception as e:
        return str(e)
# @app.route('/upload', methods=['POST'])
# def upload():
#     try:

#         image_data = request.files['image'].read()

#         cur = mysql.connection.cursor()
#         cur.execute("INSERT INTO image (image) VALUES (%s)", (image_data))
#         mysql.connection.commit()
#         cur.close()

#         return redirect(url_for('index'))
#     except Exception as e:
#         return str(e)

# @app.route('/upload', methods=['POST'])
# def upload():
#     try:
#         category = request.form.get('category')
#         description = request.form.get('description')
#         image = request.files['image']
#         print('from upload')
#         print(f'category : {category}, description : {description} imgae : {image}')
#         cur = mysql.connection.cursor()
#         cur.execute("INSERT INTO images (category, image, description) VALUES (%s, %s,%s)", (category,image, description))
#         mysql.connection.commit()
#         cur.close()

#         return redirect(url_for('index'))
#     except Exception as e:
#         return str(e)
# @app.route('/upload', methods=['POST'])
# def upload():
#     try:
#         print('Received data:', request.form)
#         category = request.form.get('category')
#         description = request.form.get('description')
#         image = request.files.get('image')
#         print(f'category : {category}, description : {description} imgae : {image}')
#         # Make sure to secure the filename before saving
#         filename = secure_filename(image.filename)

#         # Save the file to your desired location
#         # Insert data into the images table
#         cur = mysql.connection.cursor()
#         cur.execute("INSERT INTO images (category, image, description) VALUES (%s, %s, %s)",
#                     (category, filename, description))
#         # mysql.commit()
#         cur.close()

#         return redirect(url_for('index'))
#     except Exception as e:
#         return str(e)
@app.route('/view_data')
def view_data():
    data =[ ]
    try:
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM images")
        server_data = cur.fetchall()
        for values in server_data:
            image_data = (values[2])
            encoded_image = base64.b64encode(image_data).decode('utf-8')
            data.append([values[0],values[1],encoded_image,values[3]])    
        cur.close()
        return render_template('view_data.html', data=data)
    except Exception as e:
        return str(e)

@app.route('/get_data')
def get_data():
    category = request.args.get('category')
    print('category',category)
    data = []
    try:
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM images WHERE category = %s", (category,))
        server_data = cur.fetchall()
        for values in server_data:
            encoded_image = base64.b64encode(values[2]).decode('utf-8')
            data.append({
                'id' : values[0],
                'image' : encoded_image,
                'description' : values[3]
            })
        cur.close()
        return jsonify(data)
    except Exception as e:
        return jsonify({'error' : str(e)})


if __name__ == '__main__':
    app.run(debug=True)
