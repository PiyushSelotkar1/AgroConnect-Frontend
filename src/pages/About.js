import React from 'react';
import Layout from '../components/Layout/Layout';

const About = () => {
    return (
        <Layout title={"About Us"}>
            <h1>About Us</h1>
            <p>Welcome to Agro Connect, your go-to platform for comprehensive farming analysis and tool rental services. At Agro Connect, we are committed to revolutionizing the agriculture industry by providing farmers with innovative solutions to optimize their farming practices.</p>

            <h2>Our Mission</h2>
            <p>Our mission is to empower farmers with data-driven insights and access to high-quality agricultural tools, enabling them to increase productivity, reduce costs, and sustainably manage their farms.</p>

            <h2>What We Offer</h2>
            <p>At Agro Connect, we offer a range of services tailored to meet the diverse needs of farmers:</p>
            <ul>
                <li><strong>Farming Analysis:</strong> Our advanced analytics tools provide farmers with valuable insights into crop yields, soil health, weather patterns, and more, helping them make informed decisions to optimize their farming operations.</li>
                <li><strong>Tool Rental:</strong> We provide access to a wide selection of agricultural tools and equipment, allowing farmers to efficiently manage their land and crops without the burden of ownership.</li>
                <li><strong>Expert Support:</strong> Our team of agricultural experts is dedicated to providing personalized assistance and guidance to farmers, ensuring they have the resources and support they need to succeed.</li>
            </ul>

            <h2>Our Values</h2>
            <p>At Agro Connect, we are guided by the following core values:</p>
            <ul>
                <li><strong>Innovation:</strong> We are committed to embracing innovation and leveraging technology to drive positive change in the agriculture industry.</li>
                <li><strong>Sustainability:</strong> We prioritize sustainability in all aspects of our business, striving to minimize environmental impact and promote sustainable farming practices.</li>
                <li><strong>Customer Focus:</strong> We prioritize the needs of our customers and are dedicated to delivering exceptional service and value at every step of the farming journey.</li>
                <li><strong>Integrity:</strong> We operate with honesty, transparency, and integrity, earning the trust and respect of our customers, partners, and communities.</li>
            </ul>

            <h2>Get in Touch</h2>
            <p>Thank you for choosing Agro Connect. If you have any questions or would like to learn more about our services, please don't hesitate to contact us at <a href="mailto:farmanalysistoolrental@gmail.com">farmanalysistoolrental@gmail.com</a>. We look forward to partnering with you to help you achieve your farming goals.</p>

            <h1>Terms and Conditions</h1>
            <p>These terms and conditions govern your use of the Agro Connect mobile application.</p>
            <p>Agro Connect provides general information about farming practices and does not take into account the specific circumstances of any user. Users should always consult with a professional advisor before making any decisions based on the information provided by Agro Connect.</p>
            <p>The Agro Connect mobile application and its contents are protected by copyright, trademark, and other intellectual property laws. You may not modify, copy, reproduce, republish, upload, post, transmit, or distribute any portion of the application or its contents without the prior written consent of Agro Connect.</p>
            <p>The Agro Connect mobile application provides farming analysis and recommendations based on various factors such as soil conditions, weather data, and crop patterns. The analysis and recommendations are generated using algorithms and data models, but they may not always be accurate or suitable for every farming situation. Users should use their discretion and consider other relevant factors before implementing any farming practices suggested by the application.</p>
            <p>Agro Connect provides a tool rental system where users can rent farming tools and equipment from other users. The availability, condition, and terms of rental for each tool are determined by the tool owner. Agro Connect does not guarantee the quality, functionality, or suitability of the rented tools. Users should inspect the tools before renting and use them at their own risk. Agro Connect is not responsible for any damages, injuries, or losses resulting from the use of rented tools.</p>
            <p>Agro Connect may revise these terms and conditions at any time without notice. By using the application, you are agreeing to be bound by the current version of these terms and conditions.</p>
        </Layout>
    );
}

export default About;
