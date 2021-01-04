import React from 'react'

class RandomMeme extends React.Component{
    state={
        topText: "",
        btmText: "",
        randImg: "https://i.imgflip.com/3si4.jpg",
        imgs: []
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(res => {
            const {memes} = res.data
            this.setState({
                imgs: memes
            })
        })
    }

    // handle change 
    handleChange = (e) => {
        const {name, value } = e.target 
        this.setState({
            [name]:value
        })
    }

    // handle submit 
    handleSubmit = (e) => {
        e.preventDefault()
        let imgsLen = this.state.imgs.length 
        let num = Math.floor(Math.random() * imgsLen)
        let img =   this.state.imgs[num].url 
        this.setState(
            {
                
                randImg: img
            }
        )
        e.target.topText.value =""
        e.target.btmText.value =""
    }



    render(){
        return(
            <div className="section">
                <div className="randomMeme u-center-text u-margin-bottom-3">
                    <h2 className="heading-secondary u-margin-bottom-3">Random Memes</h2>
                    <form className="randomMeme__form" onSubmit={this.handleSubmit}>
                        <label className="randomMeme__form__label">Top text:</label>
                        <input 
                            className="randomMeme__form__input"
                            type="text"
                            name="topText"
                            placeholder="Top Text"
                            onChange={this.handleChange}
                        /> <br />
                        <label className="randomMeme__form__label">Bottom text:</label>
                        <input 
                            className="randomMeme__form__input"
                            type="text"
                            name="btmText"
                            placeholder="Bottom Text"
                            onChange={this.handleChange}
                        /><br />
                        <button className="btn">Meme</button>
                    </form>
                    {/* display div  */}
                    <div className="randomMeme__imgBox">
                        <img className="randomMeme__imgBox__img" src={this.state.randImg} alt="meme img"/>
                        <h3 className="randomMeme__imgBox__topText">{this.state.topText}</h3>
                        <h3 className="randomMeme__imgBox__btmText">{this.state.btmText}</h3>
                    </div>
                </div>
            </div>
        )

    }


}

export default RandomMeme;