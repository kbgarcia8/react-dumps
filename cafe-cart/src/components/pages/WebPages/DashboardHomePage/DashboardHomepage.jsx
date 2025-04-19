import React from "react";
import PropTypes from "prop-types";
import * as styled from "./DashboardHomePage.styles.js"
import FacebookIcon from "../../../atoms/SVG/FacebookIcon.jsx";
import InstagramIcon from "../../../atoms/SVG/InstagramIcon.jsx";
import XIcon from "../../../atoms/SVG/XIcon.jsx";
import TiktokIcon from "../../../atoms/SVG/TiktokIcon.jsx"

const DashboardHomePage =({}) => {

    return(
        <styled.DashboardHomePageWrapper>
            <styled.HappyHourSpace>
                <styled.HappyHourTexts>                
                    <styled.HappyHourHeader>{"☕ Happy Hour at Kain at Kape – 50% Off!"}</styled.HappyHourHeader>
                    <styled.HappyHourDetails>{"Unwind and treat yourself without breaking the bank! Join us for Happy Hour every weekday from 2:00 PM to 5:00 PM and enjoy 50% OFF on select drinks and pastries. Whether you're catching up with friends or need a mid-afternoon pick-me-up, it's the perfect time to sip, snack, and save. Don't miss out—Kain at Kape is your new go-to spot for good vibes and great deals."}</styled.HappyHourDetails>
                    <styled.TermsAndConditionSpan>{"Terms and Conditions apply."}</styled.TermsAndConditionSpan>
                </styled.HappyHourTexts>
                <styled.HappyHourImageContainer></styled.HappyHourImageContainer>
            </styled.HappyHourSpace>
            <styled.VouchersSpace>
                <styled.VouchersHeader>{"🎟️ Vouchers"}<styled.StyledMenuLink to={`./menu`}>{" Go to Menu"}</styled.StyledMenuLink></styled.VouchersHeader>
                <styled.VoucherDetailsSpan><b>{"First time Delivery: "}</b>{"Buy 1 Take 1 on any Hot or Cold Beverage"}</styled.VoucherDetailsSpan>
                <styled.VoucherDetailsSpan><b>{"Kape sa Umaga: "}</b>{"50% off on any hot drink and breakfast item from 7AM to 10AM, Mondays to Fridays. Start your day right!"}</styled.VoucherDetailsSpan>
                <styled.VoucherDetailsSpan><b>{"Fuel Monday: "}</b>{"Get 1 free iced drink with every order of a pasta dish. Fuel up with flavor and refreshment!"}</styled.VoucherDetailsSpan>
                <styled.VoucherDetailsSpan><b>{"Sweet Saturday: "}</b>{"Enjoy a free pastry or dessert when you purchase any two beverages. Because sweet endings are the best."}</styled.VoucherDetailsSpan>
            </styled.VouchersSpace>
            <styled.AnnouncementSpace>
                <styled.AnnouncementsHeader>{"📢 Announcements"}</styled.AnnouncementsHeader>
                <styled.AnnouncementDetailsSpan><b>{"First time Delivery: "}</b>{"In honor of this upcoming Holy Week. We are closed on Maundy Thursday (April 17) and Good Friday (April 18)."}</styled.AnnouncementDetailsSpan>
                <styled.AnnouncementDetailsSpan><b>{"Extended Hours This Weekend!: "}</b>{"We’re open until 11 PM on Friday and Saturday—more time for you to chill with coffee and friends."}</styled.AnnouncementDetailsSpan>
                <styled.AnnouncementDetailsSpan><b>{"Live Acoustic Nights: "}</b>{"Join us for mellow vibes and live music every Friday at 7 PM. 🎶 Reserve your seat now!"}</styled.AnnouncementDetailsSpan>
                <styled.AnnouncementDetailsSpan><b>{"Reusable Cup Discount: "}</b>{"Bring your own cup and get ₱10 OFF your drink—let’s help the planet, one sip at a time."}</styled.AnnouncementDetailsSpan>
            </styled.AnnouncementSpace>
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
        </styled.DashboardHomePageWrapper>
    )
}

export default DashboardHomePage;