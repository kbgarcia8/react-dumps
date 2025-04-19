import React from "react";
import * as styled from "./HomePage.styles.js"
import FacebookIcon from "../../../atoms/SVG/FacebookIcon.jsx";
import InstagramIcon from "../../../atoms/SVG/InstagramIcon.jsx";
import XIcon from "../../../atoms/SVG/XIcon.jsx";
import TiktokIcon from "../../../atoms/SVG/TiktokIcon.jsx";


const services = [
    {
        name: "Online Transaction",
        icon: "https://cdn-icons-png.freepik.com/512/11027/11027115.png?ga=GA1.1.404857351.1712593838",
        description: "Enjoy seamless ordering with our user-friendly online platform—browse the menu, place your order, and pay digitally for a hassle-free café experience."
    },
    {
        name: "Reward Points",
        icon: "https://cdn-icons-png.freepik.com/512/1900/1900385.png?ga=GA1.1.404857351.1712593838",
        description: "Every order earns you points! Redeem them for exciting discounts, freebies, or exclusive treats. Loyalty definitely tastes better at Kain at Kape."
    },
    {
        name: "Event & Space Rental",
        icon: "https://cdn-icons-png.freepik.com/512/16490/16490234.png?ga=GA1.1.404857351.1712593838",
        description: "Planning a small celebration, meeting, or cozy gathering? Our warm and welcoming space is available for private rentals—perfect for making moments memorable."
    },
    {
        name: "Pet Friendly",
        icon: "https://cdn-icons-png.freepik.com/512/489/489399.png?ga=GA1.1.404857351.1712593838",
        description: "Fur babies are family too! Bring them along and relax in our designated pet-friendly area, complete with comfort and care for you and your companion."
    }
]

const HomePage =({}) => {

    return(
        <styled.HomePageWrapper>
            <styled.AboutUsSpace>
                <styled.AboutUsHeader>{"About Us"}</styled.AboutUsHeader>
                <styled.AboutUsArticle>{"Kain at Kape began as a simple dream between friends who shared a deep love for two of life’s greatest comforts—delicious food (\"kain\") and freshly brewed coffee (\"kape\"). Tucked in a cozy corner of the city, our café was born from countless late-night conversations, heartfelt recipes passed down through generations, and a desire to create a space where people could slow down and savor the moment. Every cup we serve and every dish we prepare is inspired by Filipino warmth, community, and a love for authentic flavors. Whether you're here for your morning pick-me-up or an afternoon bite with friends, we invite you to feel right at home. Welcome to Kain at Kape—where food and coffee bring people together."}</styled.AboutUsArticle>
            </styled.AboutUsSpace>
            <styled.UniquenessDescriptionSpace>
                <styled.DescriptionSpace>
                    <styled.DescriptionHeader>{"What's different in our Kape"}</styled.DescriptionHeader>
                    <styled.Description>{"At Kain at Kape, coffee isn’t just a drink—it’s an experience. What sets our brews apart is our commitment to quality and Filipino identity. We proudly source our beans from local farmers across the Philippines, from the rich soils of Benguet to the bold notes of Mt. Apo. Each cup celebrates our roots with flavors that are earthy, deep, and distinctly Pinoy. Our beans are freshly roasted in small batches to preserve their natural aroma and character. Paired with our unique brewing methods and thoughtful craftsmanship, every sip tells a story—of culture, community, and care. It’s coffee made with purpose, passion, and a whole lot of heart."}</styled.Description>
                </styled.DescriptionSpace>
                <styled.DescriptionSpaceFiller></styled.DescriptionSpaceFiller>
                <styled.DescriptionSpace>
                    <styled.DescriptionHeader>{"A Taste for Every Craving"}</styled.DescriptionHeader>
                    <styled.Description2>{"At Kain at Kape, variety is at the heart of what we do. Our menu is thoughtfully crafted to satisfy every kind of appetite—from light bites to full meals, sweet cravings to savory indulgences. Whether you’re in the mood for a comforting bowl of pasta, a warm, flaky pastry, hearty rice meals, or a refreshing dessert, we’ve got something that hits the spot."}</styled.Description2>
                    <styled.Description2>{"We take pride in offering a wide selection so that every visit brings a new flavor to discover. It's the kind of place where you can start your day with a filling brunch, catch up with friends over snacks, or wind down with a satisfying dinner—no matter what time, there's always something for everyone.At Kain at Kape, we don’t just serve food—we serve moments, memories, and meals that bring people together."}</styled.Description2>
                </styled.DescriptionSpace>
            </styled.UniquenessDescriptionSpace>
            <styled.ServicesSpace>
                {services.map((service, index) => (
                    <styled.ServicesCard key={index}>
                        <styled.ServiceHeader>{`${service.name}`}</styled.ServiceHeader>
                        <styled.ServicesDescrptionSpace>
                            <styled.ServiceIcon src={service.icon} alt={`${service.name}-icon`}/>
                            <styled.ServicesDescrption>{`${service.description}`}</styled.ServicesDescrption>
                        </styled.ServicesDescrptionSpace>
                    </styled.ServicesCard>
                ))}
            </styled.ServicesSpace>
            <styled.SocialDetailsSpace>                
                <styled.SocialDetailsSpanContainer>
                    <styled.SocialDetailsHeader>{"Follow us on our social medias!"}</styled.SocialDetailsHeader>
                    <styled.SocialDetailsSpan>
                        <FacebookIcon strokeWidth={3}/>
                        {"Kain at Kape - Cafe"}
                    </styled.SocialDetailsSpan>
                    <styled.SocialDetailsSpan>
                        <InstagramIcon strokeWidth={3}/>
                        {"@kainatkapena"}
                    </styled.SocialDetailsSpan>
                    <styled.SocialDetailsSpan>
                        <XIcon strokeWidth={3}/>
                        {"@kainatkapeph"}
                    </styled.SocialDetailsSpan>
                    <styled.SocialDetailsSpan>
                        <TiktokIcon strokeWidth={3}/>
                        {"@araw-arawkainatkape"}
                    </styled.SocialDetailsSpan>
                </styled.SocialDetailsSpanContainer>
                <styled.SocialDetailsImageContainer>
                    
                </styled.SocialDetailsImageContainer>
            </styled.SocialDetailsSpace>
        </styled.HomePageWrapper>
    )
}

export default HomePage;