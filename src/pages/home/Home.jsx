import { motion, AnimatePresence } from 'framer-motion';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../../config/motion';
import { CustomButton } from '../../components';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Home = () => {
  const auth=useSelector(state=>state.auth)

  return (
    <AnimatePresence>
       (
             
<>
<motion.div {...slideAnimation('down')}>

<div className='absolute right-10 top-10 ' style={{"zIndex":100}}> 



{/* <Button variant="contained">Login</Button> */}
<Link to={auth.token?'dashboard/main':'SignIn'}><CustomButton type="filled" title={auth.token?"My panel":"Sign In"} handleClick={()=>null}
customStyles="w-fit px-4 py-2.5 font-bold text-sm m-2"

/> </Link>



</div>
</motion.div>
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation('down')}>
            {/* <img src="./assets/images/react.png" alt="logo" className="w-8 h-8 object-contain" /> */}
            <h3 style={{ fontSize: "25px", color: "#346fc7cf" }}>Ministère de l'Enseignement Supérieur</h3>

          </motion.header>
         

          <motion.div className='home-content' {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
<div className='mt-5 mb-2'>
            <img src="/assets/images/logo.png" alt="" />
            </div>
            </motion.div>


            <motion.div className="relative" style={{ zIndex: 1 }} {...headContentAnimation}>
              <div style={{ position: 'fixed', opacity:0.5, bottom: 10, right: "50px" ,zIndex:-10}}>
                <img src="/assets/images/school.png" alt=""  />
              </div>
              <div className="flex flex-col gap-5" {...headContentAnimation}>
                <p className="max-w-md font-normal text-gray-600 text-base">Progres MESRS is a digital platform or tool mobilized by the Ministry of Higher Education to improve services for the university community. <strong>Purpose: It aims to enhance services for students, faculty, and staff</strong></p>
                <div></div>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>
      </>
    </AnimatePresence>
  );
}

export default Home;