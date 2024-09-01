import './about_viewer.css'
import chef from '../assets/chef.jpg'

export default function AboutViewer() {
    return (
        <div className="aboutViewer">
            <div className="aboutContent">
                <img src={chef} alt="cooking"/>
                <h2 className="title">Who Am I?</h2>
                <p className="text">
                    Hello! I’m Lukrecija, the heart and soul behind this recipe book.
                    <br/>
                    Cooking has always been a passion of mine, and I’ve spent countless hours experimenting in the
                    kitchen, perfecting recipes, and
                    discovering new flavors. <br/> My culinary journey started when I was a
                    child, baking cookies with my grandmother and has evolved into a lifelong love affair with food.
                </p>

                <h2 className="title">My Cooking Philosophy</h2>
                <p className="text">
                    At [Your Recipe Book Name], I believe that food is not just about sustenance; it’s a way to connect,
                    share, and celebrate life. I’m dedicated to bringing you recipes that are not only delicious but
                    also approachable and practical.
                    <br/> My goal is to inspire you to get creative in your kitchen, whether
                    you’re a seasoned chef or just starting out.
                </p>

                <h2 className="title">What You’ll Find Here</h2>
                <p className="text">
                    This recipe book is a collection of my favorite recipes, ranging from [mention types of recipes,
                    e.g., "simple weeknight dinners"] to [mention other types, e.g., "decadent desserts"]. Each recipe
                    is crafted with love and tested to ensure it delivers not just flavor but also an enjoyable cooking
                    experience.

                    I’m passionate about using fresh, wholesome ingredients, and many of my recipes feature [mention any
                    specialties, e.g., "seasonal produce" or "healthy alternatives"]. Whether you're looking for a quick
                    weeknight meal or an impressive dish for special occasions, you’ll find plenty of inspiration here.
                </p>

                <h2 className="title">Join the Journey</h2>
                <p className="text">
                    I invite you to explore the recipes, try them out, and share your feedback. Cooking is a journey of
                    discovery, and I’m thrilled to have you along for the ride. Don’t hesitate to reach out with
                    questions, suggestions, or simply to share your own cooking adventures.

                    Thank you for visiting [Your Recipe Book Name]. Here’s to delicious food and wonderful memories made
                    around the table!
                </p>

                <p>
                    Happy cooking!
                    <br/>
                    Lukrecija
                </p>
            </div>
        </div>
    )
}