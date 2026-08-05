import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import SectionHeading from '@/components/SectionHeading';

// Contact configuration
const CONTACT_EMAIL = 'bhuvann67@gmail.com';
// After creating a form at https://formspree.io, paste its ID here (e.g. 'xldeqvwk').
// Until then, the form gracefully falls back to opening the visitor's email client.
const FORMSPREE_FORM_ID = 'YOUR_FORMSPREE_ID';
const isFormspreeConfigured =
  FORMSPREE_FORM_ID && FORMSPREE_FORM_ID !== 'YOUR_FORMSPREE_ID';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const openMailFallback = () => {
    const subject = encodeURIComponent(`Portfolio contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'Error',
        description: 'Please fill in all fields',
        variant: 'destructive'
      });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast({
        title: 'Error',
        description: 'Please enter a valid email address',
        variant: 'destructive'
      });
      return;
    }

    // Fallback: no Formspree configured yet — open the visitor's email client.
    if (!isFormspreeConfigured) {
      openMailFallback();
      toast({
        title: 'Opening your email app…',
        description: 'Your message was pre-filled. Just hit send!'
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast({
          title: 'Success!',
          description: "Your message has been sent. I'll get back to you soon!"
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Formspree request failed');
      }
    } catch (error) {
      toast({
        title: "Couldn't send via the form",
        description: 'Opening your email app instead…',
        variant: 'destructive'
      });
      openMailFallback();
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/Bhuvann-dev',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/bhuvan-n-1aa886425/',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      icon: Mail,
      url: `mailto:${CONTACT_EMAIL}`,
      color: 'hover:text-red-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="contact"
          title="Get In Touch"
          subtitle="Want to know more? Let's connect!"
        />

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="mt-2 bg-background text-foreground"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="mt-2 bg-background text-foreground"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    rows={5}
                    className="mt-2 bg-background text-foreground"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Connect With Me
                </h3>
                
                <div className="flex gap-4 mb-8">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-lg bg-background border border-border ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>

                <div className="border-t border-border pt-6">
                  <h4 className="text-lg font-semibold text-foreground mb-4">
                    Download My Resume
                  </h4>
                  <a 
                    href="/Bhuvan-N-Resume.pdf" 
                    download 
                    className="w-full"
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full gap-2"
                    >
                      <Download className="w-5 h-5" />
                      Download Resume (PDF)
                    </Button>
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-xl p-6">
                <p className="text-muted-foreground text-center">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;