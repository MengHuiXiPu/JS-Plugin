import { useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import DomTOImageMore from 'dom-to-image-more'

const Domtoimagemore = () => {
    useEffect(() => {
        // getImg()
    }, [])

    const getImg = () => {
        //更多功能查看文档
        const myNode = document.getElementById('my-node')
        // DomTOImageMore.toPng(myNode).then(res => {//0
        ////     //png格式
        //     var img = new Image()//0
        //     img.src = res
        //     document.body.append(img)
        // })}
        // DomTOImageMore.toBlob(myNode).then(function (res) {//1
        //// blob 格式
        //     window.saveAs(res, 'my-node.png');//1
        // })}

        DomTOImageMore.toJpeg(myNode).then(res => {//2
            // jpeg格式
            var link = document.createElement('a')//2
            link.download = 'my-img-name.jpeg'
            link.href = res
            link.click()
        })
    }

        return <div id="my-node">
            <button onClick={getImg}>html2canvas截图支持多种格式</button>
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
export default Domtoimagemore