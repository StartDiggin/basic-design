import React from 'react'
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import navPrev from './images/nav_prev.svg'
import navNext from './images/nav_next.svg'

class SlideShowApp extends React.Component {
    state={
        slideIndex: 1,
        lines: 0,
        id: 0
    }
          
        
    showSlides = () => {
        let slides = document.querySelectorAll('.slideShow__slides')
        this.setState({lines: slides.length})
        for(let i=0;i<slides.length;i++){
            slides[i].classList.remove('activeImg')
        }
        let num = this.state.slideIndex
        slides[num-1].classList.add('activeImg')
    }   

    changeSlide = (n) => {
        let slides = document.querySelectorAll('.slideShow__slides')
        let len = slides.length
        let index = this.state.slideIndex
        index = index + n;

        index < 1 ? this.setState({slideIndex: len}) : index > len ? this.setState({slideIndex: 1}) : this.setState({slideIndex: index});
     
        this.showSlides()
        this.handleFill()
    }

    // fill indicator color 
    handleFill = () => {
        let index = this.state.slideIndex-1
        let lines = document.querySelectorAll(".slideShow__indicator")
        for(let i=0;i<lines.length;i++){
            lines[i].classList.remove('fill')
        }

        for(let i=0;i<lines.length;i++){
            if(i === index){
                lines[i].classList.add('fill')
            }
        }
    }

 
    render(){
        return(
            <div className="section">
               <div className="slideShow u-center-text ">
                   <h2 className="heading-secondary u-margin-bottom-3">Slide Show</h2>
                {/* Image container  */}
                    <div className="slideShow__container u-center-vh-text">
                        <div className="slideShow__innerContainer">
                            {/* image 1 */}
                            <div className="slideShow__slides fade activeImg">
                                <img src={img1} alt="img"/>
                            </div>
                            {/* image 2  */}
                            <div className="slideShow__slides fade">
                                <img src={img2} alt="img"/>
                            </div>
                            {/* image 3 */}
                            <div className="slideShow__slides fade">
                                <img src={img3} alt="img"/>
                            </div>

                            {/* Next and Prev buttons  */}
                            <img src={navPrev} onClick={() => this.changeSlide(-1)} className="arrows prev" alt="prev"/>
                            <img src={navNext} onClick={() => this.changeSlide(1)} className="arrows next" alt="next"/>
                           
                            {/* Image indicators  */}
                            <div className="slideShow__indicators">
                                <span className="slideShow__indicator fill">&nbsp;</span>
                                <span className="slideShow__indicator  ">&nbsp;</span>
                                <span className="slideShow__indicator  ">&nbsp;</span>
                            </div>
                        </div>
                        
                    </div>
               </div>
            </div>
        )

    }

}

export default SlideShowApp;