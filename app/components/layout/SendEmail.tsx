import emailjs from '@emailjs/browser';
emailjs.init("UuFhYF6uClwGf_lFk");

export const sendWelcomeEmail = async (email: string) => {
    console.log("Sending welcome email to:", email);
    try {
        const templateParams: {
            to_email: string;
            from_name: string;
            subject: string;
            company_address: string;
            company_phone: string;
            company_email: string;
            message: string;
        } = {
            to_email: email,
            from_name: "Shree Bhargava Infrastructure Development Pvt. Ltd. - Creative Indian Architect",
            subject: "Welcome to Shree Bhargava Architectural Family! 🎉",
            company_address: "Apolo Tower , Indore, Madhya Pradesh, India",
            company_phone: "+91 123 456 7890",
            company_email: "zorway123@gmail.com",
            // HTML template for the email
            message: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333333;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
              color: white;
              padding: 30px;
              text-align: center;
              border-radius: 8px 8px 0 0;
            }
            .content {
              background: #ffffff;
              padding: 30px;
              border: 1px solid #e5e5e5;
              border-radius: 0 0 8px 8px;
            }
            .footer {
              text-align: center;
              margin-top: 20px;
              padding: 20px;
              font-size: 12px;
              color: #666666;
            }
            .social-links {
              text-align: center;
              padding: 20px 0;
            }
            .social-links a {
              color: #f97316;
              text-decoration: none;
              margin: 0 10px;
            }
            .feature-list {
              background: #f8fafc;
              padding: 20px;
              border-radius: 8px;
              margin: 20px 0;
            }
            .cta-button {
              display: inline-block;
              background: #f97316;
              color: white;
              padding: 12px 25px;
              text-decoration: none;
              border-radius: 25px;
              margin: 20px 0;
            }
            .contact-info {
              background: #f8fafc;
              padding: 15px;
              border-radius: 8px;
              margin-top: 20px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Welcome to Shree Bhargava Infrastructure Development pvt. ltd.</h1>
              <p>Thank you for joining our architectural studio!</p>
            </div>
            
            <div class="content">
              <p>Dear Subscriber,</p>
              
              <p>Thank you for subscribing to our newsletter! We're thrilled to welcome you to the Shree Bhargava family. As one of India's leading architectural firms, we're excited to share our passion for innovative design and sustainable development with you.</p>

              <div class="feature-list">
                <h3>Here's what you can expect from our newsletter:</h3>
                <ul>
                  <li>Exclusive previews of our latest architectural projects</li>
                  <li>Behind-the-scenes insights into our design process</li>
                  <li>Industry trends and innovations in sustainable architecture</li>
                  <li>Expert articles on modern Indian architecture</li>
                  <li>Invitations to virtual and in-person events</li>
                  <li>Special announcements and company milestones</li>
                </ul>
              </div>

              <p>As a subscriber, you'll be among the first to receive updates about:</p>
              <ul>
                <li>New project launches and developments</li>
                <li>Architectural innovations and sustainable solutions</li>
                <li>Industry insights and expert perspectives</li>
                <li>Company news and achievements</li>
              </ul>

              <div style="text-align: center;">
                <a href="https://www.shreebhargava.com/projects" class="cta-button">
                  Explore Our Projects
                </a>
              </div>

              <div class="contact-info">
                <h3>Stay Connected</h3>
                <p>Have questions or want to discuss a project? Reach out to us:</p>
                <p>📞 +91 123 456 7890</p>
                <p>✉️ info@shreebhargava.com</p>
                <p>📍 123 Business District, Mumbai, Maharashtra, India</p>
              </div>

              <div class="social-links">
                <p>Follow us on social media:</p>
                <a href="#">Facebook</a> |
                <a href="#">Twitter</a> |
                <a href="#">Instagram</a> |
                <a href="#">LinkedIn</a>
              </div>
            </div>

            <div class="footer">
              <p>This email was sent to ${email}</p>
              <p>© ${new Date().getFullYear()} Shree Bhargava Infrastructure. All rights reserved.</p>
              <p>
                <small>If you didn't subscribe to our newsletter, please ignore this email or 
                <a href="#" style="color: #f97316;">unsubscribe here</a></small>
              </p>
            </div>
          </div>
        </body>
        </html>
        `
        };

        await emailjs.send(
            "service_xj32ovl", // Replace with your EmailJS service ID
            "template_bbm6u2f", // Replace with your EmailJS template ID
            templateParams
        );

        return true;
    } catch (error) {
        console.error("Error sending email:", error);
        return false;
    }
}