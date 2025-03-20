import emailjs from '@emailjs/browser';

// Type definition for the form data
export interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  service?: string;
}

// Initialize EmailJS with the public key
emailjs.init("CdeeF2AXWhtNJJ2DQ");

/**
 * Sends form data to the specified email address using EmailJS
 */
export const sendFormDataToEmail = async (formData: FormData): Promise<{ success: boolean; message: string }> => {
  try {
    const response = await emailjs.send(
      "service_198pxf9",
      "template_sjwz4n2",
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        service: formData.service || 'General Inquiry'
      }
    );

    if (response.status === 200) {
      console.log('Email sent successfully');
      return {
        success: true,
        message: 'Email sent successfully'
      };
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      message: 'Failed to send email. Please try again later.'
    };
  }
};

export default {
  sendFormDataToEmail
}; 