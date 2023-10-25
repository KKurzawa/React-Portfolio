import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { BiLogoJquery, BiLogoNodejs, BiLogoMongodb, BiLogoReact, BiLogoHeroku, BiLogoNetlify, BiLogoGraphql } from 'react-icons/bi';
import { BsFillBootstrapFill } from 'react-icons/bs';
import { SiBulma, SiMongoose, SiWebpack, SiJsonwebtokens, SiVite, SiHandlebarsdotjs, SiSequelize, SiInsomnia, SiBabel, SiSvg, SiJest } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import { TbJson } from 'react-icons/tb';

export default function Skills() {
    return (
        <div className='skills'>
            <a className='skill' href='https://html.spec.whatwg.org/'>
                <AiFillHtml5 />
            </a>
            <a className='skill' href='https://www.w3.org/Style/CSS/Overview.en.html'>
                <FaCss3Alt />
            </a>
            <a className='skill' href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'>
                <IoLogoJavascript />
            </a>
            <a className='skill' href='https://jquery.com/'>
                <BiLogoJquery />
            </a>
            <a className='skill' href='https://getbootstrap.com/'>
                <BsFillBootstrapFill />
            </a>
            <a className='skill' href='https://bulma.io/'>
                <SiBulma />
            </a>
            <a className='skill' href='https://nodejs.org/en'>
                <BiLogoNodejs />
            </a>
            <a className='skill' href='https://www.mysql.com/'>
                <GrMysql />
            </a>
            <a className='skill' href='https://www.mongodb.com/try/download/shell'>
                <BiLogoMongodb />
            </a>
            <a className='skill' href='https://mongoosejs.com/'>
                <SiMongoose />
            </a>
            <a className='skill' href='https://webpack.js.org/'>
                <SiWebpack />
            </a>
            <a className='skill' href='https://react.dev/'>
                <BiLogoReact />
            </a>
            <a className='skill' href='https://graphql.org/'>
                <BiLogoGraphql />
            </a>
            <a className='skill' href='https://www.json.org/json-en.html'>
                <TbJson />
            </a>
            <a className='skill' href='https://jwt.io/'>
                <SiJsonwebtokens />
            </a>
            <a className='skill' href='https://vitejs.dev/'>
                <SiVite />
            </a>
            <a className='skill' href='https://handlebarsjs.com/'>
                <SiHandlebarsdotjs />
            </a>
            <a className='skill' href='https://www.heroku.com/home'>
                <BiLogoHeroku />
            </a>
            <a className='skill' href='https://sequelize.org/'>
                <SiSequelize />
            </a>
            <a className='skill' href='https://insomnia.rest/'>
                <SiInsomnia />
            </a>
            <a className='skill' href='https://babeljs.io/'>
                <SiBabel />
            </a>
            <a className='skill' href='https://www.netlify.com/'>
                <BiLogoNetlify />
            </a>
            <a className='skill' href='https://www.w3.org/Graphics/SVG/'>
                <SiSvg />
            </a>
            <a className='skill' href='https://jestjs.io/'>
                <SiJest />
            </a>
        </div >
    )
} 