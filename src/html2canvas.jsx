import { useEffect } from "react";
import H2C from 'html2canvas'
import logo from './logo.svg';
import './App.css';



const Html2Canvas = () => {
    useEffect(() => {
        // getImg()
    }, [])
    const getImg = () => {
        const myNode = document.getElementById('my-node')
        H2C(myNode,{scale:1.3}).then(function (res) {//1
            //属性scale	window.devicePixelRatio	用于渲染的比例尺。默认为浏览器设备像素比率。
            document.body.append(res)
        }).catch(err => {
            console.log(err);
        })
    }
    return <div id="my-node">
        <button onClick={getImg}>html2canvas截图</button>
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    </div>
}

export default Html2Canvas