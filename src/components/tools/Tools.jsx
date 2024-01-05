import React from 'react';
import "./tools.css";
import Py from '../../assets/python.png';
import Ts from '../../assets/ts.png';
import Js from '../../assets/js1.png';
import Html from '../../assets/html.png';
import Css from '../../assets/css.png';
import R from '../../assets/r1.png';
import Sql from '../../assets/sql2.png';
import Java from '../../assets/java.png';
import C from '../../assets/c.png';
import Csh from '../../assets/csh.png';
import Cpl from '../../assets/cpl.png';
import As from '../../assets/as.png';
import Pan from '../../assets/pan.png';
import Tf from '../../assets/tf.png';
import Num from '../../assets/num.png';
import Skl from '../../assets/skl.png';
import Pyt from '../../assets/pyt.png';
import Mpl from '../../assets/mpl.png';
import Net from '../../assets/net.png';
import Ang from '../../assets/ang.png';
import Reac from '../../assets/react.png';
import Mdb from '../../assets/mdb.png';
import Mysql from '../../assets/mysql.png';
import Aws from '../../assets/aws3.png';
import Gcp from '../../assets/gcp.png';
import Ex from '../../assets/ex2.png';
import Njs from '../../assets/njs.png';
import Vs from '../../assets/vs1.png';
import Vsc from '../../assets/vsc.png';
import Git from '../../assets/git.png';
import Dck from '../../assets/dck.png';
import Jpt from '../../assets/jpt.png';
import Jira from '../../assets/jira.png';
import Cnf from '../../assets/cnf.png';
import Int from '../../assets/int.png';
import Adp from '../../assets/adp.png';
import Mat from '../../assets/mat.png';
import Github from '../../assets/github.png';
import Uni from '../../assets/uni.png';

const Tools = () => {
    return (
        <section className="tools section container" id='tools'>
            <h2 className="section__title">Tools</h2>
            <h3 className="my__languages">Languages</h3>
            <div class="icon-container">   
                <div className = "icon">
                    <img src = {Py} alt = "" className="lang-pic" />
                    <span className="icon-name">Python</span>
                </div>
                <div className = "icon">
                    <img src = {Java} alt = "" className="lang-pic" />
                    <span className="icon-name">Java</span>
                </div>
                <div className = "icon">
                    <img src = {Js} alt = "" className="lang-pic" />
                    <span className="icon-name">JavaScript</span>
                </div>
                <div className = "icon">
                    <img src = {Ts} alt = "" className="lang-pic" />
                    <span className="icon-name">TypeScript</span>
                </div>
                <div className = "icon">
                    <img src = {Html} alt = "" className="lang-pic" />
                    <span className="icon-name">HTML</span>
                </div>
                <div className = "icon">
                    <img src = {Css} alt = "" className="lang-pic" />
                    <span className="icon-name">CSS</span>
                </div>
                <div className = "icon">
                    <img src = {C} alt = "" className="lang-pic" />
                    <span className="icon-name">C</span>
                </div>
                <div className = "icon">
                    <img src = {Csh} alt = "" className="lang-pic" />
                    <span className="icon-name">C#</span>
                </div>
                <div className = "icon">
                    <img src = {Cpl} alt = "" className="lang-pic" />
                    <span className="icon-name">C++</span>
                </div>
                <div className = "icon">
                    <img src = {Mat} alt = "" className="lang-pic" />
                    <span className="icon-name">Matlab</span>
                </div>
                <div className = "icon">
                    <img src = {R} alt = "" className="lang-pic" />
                    <span className="icon-name">R</span>
                </div>
                <div className = "icon">
                    <img src = {Sql} alt = "" className="lang-pic" />
                    <span className="icon-name">Sql</span>
                </div>
            </div>
            <h3 className="my__languages">Data Science Technologies</h3>
                <div class = "icon-container">
                    <div className = "icon">
                        <img src = {Tf} alt = "" className="lang-pic" />
                        <span className="icon-name">Tensorflow</span>
                    </div>
                    <div className = "icon">
                        <img src = {Pan} alt = "" className="lang-pic" />
                        <span className="icon-name">Pandas</span>
                    </div>
                    <div className = "icon">
                        <img src = {Num} alt = "" className="lang-pic" />
                        <span className="icon-name">NumPy</span>
                    </div>
                    <div className = "icon">
                        <img src = {Skl} alt = "" className="lang-pic" />
                        <span className="icon-name">Scikit Learn</span>
                    </div>
                    <div className = "icon">
                        <img src = {Pyt} alt = "" className="lang-pic" />
                        <span className="icon-name">Pytorch</span>
                    </div>
                    <div className = "icon">
                        <img src = {Mpl} alt = "" className="lang-pic" />
                        <span className="icon-name">Matplotlib</span>
                    </div>
                </div>
            <h3 className="my__languages">Web Development Technologies</h3>
            <div class="icon-container">   
                <div className = "icon">
                    <img src = {Net} alt = "" className="lang-pic" />
                    <span className="icon-name">.NET Core</span>
                </div>
                <div className = "icon">
                    <img src = {Ang} alt = "" className="lang-pic" />
                    <span className="icon-name">Angular</span>
                </div>
                <div className = "icon">
                    <img src = {Reac} alt = "" className="lang-pic" />
                    <span className="icon-name">React</span>
                </div>
                <div className = "icon">
                    <img src = {Mdb} alt = "" className="lang-pic" />
                    <span className="icon-name">MongoDB</span>
                </div>
                <div className = "icon">
                    <img src = {Mysql} alt = "" className="lang-pic" />
                    <span className="icon-name">MySQL</span>
                </div>
                <div className = "icon">
                    <img src = {Aws} alt = "" className="lang-pic" />
                    <span className="icon-name">Amazon Web Services</span>
                </div>
                <div className = "icon">
                    <img src = {Gcp} alt = "" className="lang-pic" />
                    <span className="icon-name">Google Cloud Platform</span>
                </div>
                <div className = "icon">
                    <img src = {Ex} alt = "" className="lang-pic" />
                    <span className="icon-name">Express.js</span>
                </div>
                <div className = "icon">
                    <img src = {Njs} alt = "" className="lang-pic" />
                    <span className="icon-name">Node.js</span>
                </div>
            </div>
            <h3 className="my__languages">Other</h3>
            <div class="icon-container"> 
                <div className = "icon">
                    <img src = {Vs} alt = "" className="lang-pic" />
                    <span className="icon-name">Visual Studio</span>
                </div>
                <div className = "icon">
                    <img src = {Vsc} alt = "" className="lang-pic" />
                    <span className="icon-name">Visual Studio Code</span>
                </div>
                <div className = "icon">
                    <img src = {Git} alt = "" className="lang-pic" />
                    <span className="icon-name">Git</span>
                </div>
                <div className = "icon">
                    <img src = {Dck} alt = "" className="lang-pic" />
                    <span className="icon-name">Docker</span>
                </div>
                <div className = "icon">
                    <img src = {Jpt} alt = "" className="lang-pic" />
                    <span className="icon-name">Jupyter Notebooks</span>
                </div>
                <div className = "icon">
                    <img src = {Github} alt = "" className="lang-pic" />
                    <span className="icon-name">GitHub</span>
                </div>
                <div className = "icon">
                    <img src = {Adp} alt = "" className="lang-pic" />
                    <span className="icon-name">Azure DevOps</span>
                </div>
                <div className = "icon">
                    <img src = {Jira} alt = "" className="lang-pic" />
                    <span className="icon-name">Jira</span>
                </div>
                <div className = "icon">
                    <img src = {Cnf} alt = "" className="lang-pic" />
                    <span className="icon-name">Confluence</span>
                </div>
                <div className = "icon">
                    <img src = {Int} alt = "" className="lang-pic" />
                    <span className="icon-name">IntelliJ IDEA</span>
                </div>
                <div className = "icon">
                    <img src = {Uni} alt = "" className="lang-pic" />
                    <span className="icon-name">Unity</span>
                </div>
            </div>

        </section>
    )
}

export default Tools