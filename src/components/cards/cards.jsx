import design from './cards.module.css'

const Cards = () => {
    return ( 
        <div className={design.cardcontainer}>
            <div className={design.cards}>
                <img src='https://edyoda.s3.amazonaws.com/media/blog-images/6.png' alt='img1' className={design.cardimage}/>
                <div className={design.carddata}>
                    <h3 className={design.cardheading}>LAMP Stack Vs MEAN stack: Choosing the right platfor...</h3>
                    <p className={design.carddate}><span className={design.edyoda}>EdYoda</span> | 24 Aug 2019</p>
                    <p className={design.cardpara}>In today’s dynamic world, developing a rapid application with a smooth user interface that can adapt to specific features is the main business requirement. Many organizations...</p>
                </div>
            </div>
            <div className={design.cards}>
                <img src='https://edyoda.s3.amazonaws.com/media/blog-images/MicrosoftTeams-image_1.png' alt='img2' className={design.cardimage}/>
                <div className={design.carddata}>
                    <h3 className={design.cardheading}>All about AITEST and how to avail rewards up to INR...</h3>
                    <p className={design.carddate}><span className={design.edyoda}>EdYoda</span> | 01 Mar 2022</p>
                    <p className={design.cardpara}>Ever since 2019, after a solid hit from the falling rate of economic growth, the job market seems to be challenging. With the technology-enabled disruption continuing to play...</p>
                </div>
            </div>
            <div className={design.cards}>
                <img src='https://edyoda.s3.amazonaws.com/media/blog-images/what_is_isa_blog_1.png' alt='img3' className={design.cardimage}/>
                <div className={design.carddata}>
                    <h3 className={design.cardheading}>What is Income Share Agreement?</h3>
                    <p className={design.carddate}><span className={design.edyoda}>EdYoda</span> | 14 Oct 2019</p>
                    <p className={design.cardpara}>The term Income Share Agreement has been around for a long time since 1955 to be precise. Surprised, eh? It was first introduced by Milton Friedman, an American economist,...</p>
                </div>
            </div>
            <div className={design.cards}>
                <img src='https://edyoda.s3.amazonaws.com/media/blog-images/7.png' alt='img4' className={design.cardimage}/>
                <div className={design.carddata}>
                    <h3 className={design.cardheading}>Importance of Data Backup and Recovery in the IT...</h3>
                    <p className={design.carddate}><span className={design.edyoda}>EdYoda</span> | 26 Aug 2019</p>
                    <p className={design.cardpara}>A business must always introspect the areas where they lack in order to bring about a positive change in the work environment. One of the main precautions or a contingency plan th...</p>
                </div>
            </div>
            <div className={design.cards}>
                <img src='https://edyoda.s3.amazonaws.com/media/blog-images/3.png' alt='img5' className={design.cardimage}/>
                <div className={design.carddata}>
                    <h3 className={design.cardheading}>Challenges of Machine Learning in Big Data...</h3>
                    <p className={design.carddate}><span className={design.edyoda}>EdYoda</span> | 24 Aug 2019</p>
                    <p className={design.cardpara}>Machine Learning is a subset of artificial intelligence which is an important part of computer science. The revolution of Big Data promises to transform the way we work, live and...</p>
                </div>
            </div>
            <div className={design.cards}>
                <img src='https://edyoda.s3.amazonaws.com/media/blog-images/5.png' alt='img6' className={design.cardimage}/>
                <div className={design.carddata}>
                    <h3 className={design.cardheading}>Breaking the Myths around Cybersecurity</h3>
                    <p className={design.carddate}><span className={design.edyoda}>EdYoda</span> | 26 Aug 2019</p>
                    <p className={design.cardpara}>Cybersecurity plays an integral role in the process of good business models. But even cybersecurity programs built with good intentions can fall short in front of advanced cyber attacking...</p>
                </div>
            </div>
            <div className={design.cards}>
                <img src='https://edyoda.s3.amazonaws.com/media/blog-images/learn_machine_learning_courses_online.png' alt='img7' className={design.cardimage}/>
                <div className={design.carddata}>
                    <h3 className={design.cardheading}>Introduction To A Machine Learning Online Course</h3>
                    <p className={design.carddate}><span className={design.edyoda}>EdYoda</span> | 23 Aug 2019</p>
                    <p className={design.cardpara}>We have had an insight into Artificial Intelligence. Well, one of its subfields is machine learning and this introduction will help you get a fair idea of what this machine learning...</p>
                </div>
            </div>
            <div className={design.cards}>
                <img src='https://edyoda.s3.amazonaws.com/media/blog-images/react-native-vs-flutter.png' alt='img8' className={design.cardimage}/>
                <div className={design.carddata}>
                    <h3 className={design.cardheading}>React Native Vs Flutter: Breaking the confusion...</h3>
                    <p className={design.carddate}><span className={design.edyoda}>EdYoda</span> | 12 Aug 2019</p>
                    <p className={design.cardpara}>The two biggest social platforms have created a buzz in the application development industry. React Native by Facebook and Flutter by Google are the latest two cross-platforms...</p>
                </div>
            </div>
            <div className={design.cards}>
                <img src='https://edyoda.s3.amazonaws.com/media/blog-images/a-primer-on-python-programming-tutorial-for-beginners.png' alt='img9' className={design.cardimage}/>
                <div className={design.carddata}>
                    <h3 className={design.cardheading}>A Primer on Python Programming Tutorial for...</h3>
                    <p className={design.carddate}><span className={design.edyoda}>EdYoda</span> | 29 Jul 2019</p>
                    <p className={design.cardpara}>Python has been the most dominant programming language in the development community for quite a few years now. This is evident from the fact that according to a recent survey...</p>
                </div>
            </div>
        </div>
     );
}
 
export default Cards;