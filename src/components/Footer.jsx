// links to github, linkedin, stack overflow
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { DiStackoverflow } from 'react-icons/di';
export default function Footer() {

    return (
        <footer>
            <nav className='footer'>
                <div>
                    <a href="https://github.com/KKurzawa"><AiFillGithub className='footerItem' /></a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/kris-kurzawa-34105226b/"><FaLinkedinIn className='footerItem' /></a>
                </div>
                <div>
                    <a href="https://stackoverflowteams.com/c/self-employed/users/1/?tab=profile"><DiStackoverflow className='footerItem' /></a>
                </div>
            </nav>
        </footer>
    );
}

// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";


// function Footer() {
//   let date = new Date();
//   let year = date.getFullYear();
//   return (
//     <Container fluid className="footer">
//       <Row>
//         <Col md="4" className="footer-copywright">
//           <h3>Designed and Developed by Soumyajit Behera</h3>
//         </Col>
//         <Col md="4" className="footer-copywright">
//           <h3>Copyright © {year} SB</h3>
//         </Col>
//         <Col md="4" className="footer-body">
//           <ul className="footer-icons">
//             <li className="social-icons">
//               <a
//                 href="https://github.com/soumyajit4419"
//                 style={{ color: "white" }}
//                 target="_blank" 
//                 rel="noopener noreferrer"
//               >
//                 <AiFillGithub />
//               </a>
//             </li>
//             <li className="social-icons">
//               <a
//                 href="https://twitter.com/Soumyajit4419"
//                 style={{ color: "white" }}
//                 target="_blank" 
//                 rel="noopener noreferrer"
//               >
//                 <AiOutlineTwitter />
//               </a>
//             </li>
//             <li className="social-icons">
//               <a
//                 href="https://www.linkedin.com/in/soumyajit4419/"
//                 style={{ color: "white" }}
//                 target="_blank" 
//                 rel="noopener noreferrer"
//               >
//                 <FaLinkedinIn />
//               </a>
//             </li>
//             <li className="social-icons">
//               <a
//                 href="https://www.instagram.com/soumyajit4419"
//                 style={{ color: "white" }}
//                 target="_blank" 
//                 rel="noopener noreferrer"
//               >
//                 <AiFillInstagram />
//               </a>
//             </li>
//           </ul>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Footer;