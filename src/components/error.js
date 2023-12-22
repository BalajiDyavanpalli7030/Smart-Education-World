import { useNavigate } from 'react-router-dom';
const Error = () => {
    const navigate = useNavigate()
  return (
    <section className='error-container'>
      <h1>Error</h1>
      <button type="button" className='btn' onClick={()=> navigate('/')}>Go Home</button>
    </section>
  );
};
export default Error;
