import React from 'react';

interface EmailTemplateProps {
  name: string;
  confirmationLink: string;
  helpLink: string;
  unsubscribeLink: string;
  privacyPolicyLink: string;
}

const EmailTemplate: React.FC<EmailTemplateProps> = ({
  name,
  confirmationLink,
  helpLink,
  unsubscribeLink,
  privacyPolicyLink,
}) => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', color: '#333' }}>
      {/* Preview Text */}
      <div style={{ display: 'none', maxHeight: '0', overflow: 'hidden', fontSize: '0', color: 'transparent' }}>
        Thank you for joining us! Get started with our platform today.
      </div>

      {/* Email Container */}
      <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto', backgroundColor: '#ffffff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        {/* Header */}
        <div style={{ backgroundColor: '#007BFF', color: '#ffffff', padding: '20px', textAlign: 'center' }}>
          <h1 style={{ margin: '0' }}>Welcome to Our Service</h1>
        </div>

        {/* Body */}
        <div style={{ padding: '20px' }}>
          <h2 style={{ color: '#007BFF' }}>Hello {name},</h2>
          <p>Thank you for signing up for our platform! We're excited to have you onboard. To get started, click the button below to confirm your email address.</p>
          <a
            href={confirmationLink}
            style={{
              display: 'inline-block',
              marginTop: '20px',
              padding: '10px 20px',
              color: '#ffffff',
              backgroundColor: '#007BFF',
              textDecoration: 'none',
              borderRadius: '5px',
              fontWeight: 'bold',
            }}
          >
            Confirm Your Email
          </a>
          <p>
            If you have any questions, feel free to reply to this email or visit our{' '}
            <a href={helpLink} style={{ color: '#007BFF' }}>
              Help Center
            </a>.
          </p>
        </div>

        {/* Footer */}
        <div style={{ textAlign: 'center', fontSize: '12px', color: '#666', padding: '20px', backgroundColor: '#f1f1f1' }}>
          <p>&copy; 2024 Your Company Name. All rights reserved.</p>
          <p>
            <a href={unsubscribeLink} style={{ color: '#007BFF', textDecoration: 'none' }}>
              Unsubscribe
            </a>{' '}
            |{' '}
            <a href={privacyPolicyLink} style={{ color: '#007BFF', textDecoration: 'none' }}>
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailTemplate;
