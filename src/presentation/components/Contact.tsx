import { useState } from 'react';
import styled from 'styled-components';
import { fadeInUp } from '../styles/animations';
import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import { contactInfo } from '@/application/data';

const ContactSection = styled.section`
  padding: ${props => props.theme.spacing['4xl']} ${props => props.theme.spacing.xl};
  background-color: ${props => props.theme.colors.backgroundLight};
  position: relative;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: ${props => props.theme.spacing['3xl']} ${props => props.theme.spacing.md};
  }
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing['3xl']};
`;

const SectionTitle = styled.h2`
  margin-bottom: ${props => props.theme.spacing.md};
  animation: ${fadeInUp} 0.8s ease-out;
`;

const SectionSubtitle = styled.p`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.textMuted};
  max-width: 600px;
  margin: 0 auto;
  animation: ${fadeInUp} 1s ease-out;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing['3xl']};

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing['2xl']};
  }
`;

const ContactInfo = styled.div`
  animation: ${fadeInUp} 1.2s ease-out;
`;

const InfoTitle = styled.h3`
  margin-bottom: ${props => props.theme.spacing.xl};
  color: ${props => props.theme.colors.text};
`;

const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};
`;

const InfoItem = styled.a`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.textSecondary};
  padding: ${props => props.theme.spacing.md};
  background: ${props => props.theme.colors.backgroundCard};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.lg};
  transition: all ${props => props.theme.transitions.base};

  &:hover {
    border-color: ${props => props.theme.colors.primary};
    background: ${props => props.theme.colors.primary}11;
    color: ${props => props.theme.colors.primary};
    transform: translateX(8px);
    box-shadow: 0 5px 20px ${props => props.theme.colors.primary}33;
  }

  svg {
    font-size: ${props => props.theme.fontSizes.xl};
    color: ${props => props.theme.colors.primary};
    transition: transform ${props => props.theme.transitions.base};
  }

  &:hover svg {
    transform: scale(1.2) rotate(5deg);
  }
`;

const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.xs};
`;

const InfoLabel = styled.span`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.textMuted};
`;

const InfoValue = styled.span`
  font-size: ${props => props.theme.fontSizes.base};
  font-weight: ${props => props.theme.fontWeights.medium};
`;

const FormContainer = styled.div`
  animation: ${fadeInUp} 1.4s ease-out;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};
`;

const Label = styled.label`
  color: ${props => props.theme.colors.textSecondary};
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: ${props => props.theme.fontWeights.medium};
`;

const Input = styled.input`
  padding: ${props => props.theme.spacing.md};
  background: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.lg};
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes.base};
  transition: all ${props => props.theme.transitions.base};

  &:focus {
    border-color: ${props => props.theme.colors.primary};
    outline: none;
    box-shadow: 0 0 0 3px ${props => props.theme.colors.primary}33;
  }

  &::placeholder {
    color: ${props => props.theme.colors.textSecondary};
  }
`;

const TextArea = styled.textarea`
  padding: ${props => props.theme.spacing.md};
  background: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.lg};
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes.base};
  min-height: 150px;
  resize: vertical;
  transition: all ${props => props.theme.transitions.base};
  font-family: ${props => props.theme.fonts.primary};

  &:focus {
    border-color: ${props => props.theme.colors.primary};
    outline: none;
    box-shadow: 0 0 0 3px ${props => props.theme.colors.primary}33;
  }

  &::placeholder {
    color: ${props => props.theme.colors.textSecondary};
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  color: ${props => props.theme.colors.text};
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.xl};
  border-radius: ${props => props.theme.borderRadius.lg};
  font-size: ${props => props.theme.fontSizes.base};
  font-weight: ${props => props.theme.fontWeights.semibold};
  transition: all ${props => props.theme.transitions.base};
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.glow};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled.div`
  padding: ${props => props.theme.spacing.md};
  background: ${props => props.theme.colors.accent}22;
  border: 1px solid ${props => props.theme.colors.accent};
  border-radius: ${props => props.theme.borderRadius.lg};
  color: ${props => props.theme.colors.accent};
  text-align: center;
`;

export const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Usando FormSubmit.co - serviço gratuito de envio de emails
      const response = await fetch('https://formsubmit.co/ajax/joaoemanuel.slima@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _captcha: 'false'
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });

        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        // Fallback para mailto se o serviço falhar
        const mailtoLink = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
          formData.subject
        )}&body=${encodeURIComponent(
          `Nome: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
        )}`;
        window.location.href = mailtoLink;
      }
    } catch (error) {
      // Fallback para mailto em caso de erro
      const mailtoLink = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Nome: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      )}`;
      window.location.href = mailtoLink;
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <ContactSection id="contact">
      <Container>
        <Header>
          <SectionTitle>{t('contact.title')}</SectionTitle>
          <SectionSubtitle>{t('contact.subtitle')}</SectionSubtitle>
        </Header>

        <Content>
          <ContactInfo>
            <InfoTitle>{t('contact.info.title')}</InfoTitle>
            <InfoList>
              <InfoItem href={`mailto:${contactInfo.email}`}>
                <FaEnvelope />
                <InfoText>
                  <InfoLabel>{t('contact.info.email')}</InfoLabel>
                  <InfoValue>{contactInfo.email}</InfoValue>
                </InfoText>
              </InfoItem>

              {contactInfo.location && (
                <InfoItem as="div">
                  <FaMapMarkerAlt />
                  <InfoText>
                    <InfoLabel>{t('contact.info.location')}</InfoLabel>
                    <InfoValue>{contactInfo.location}</InfoValue>
                  </InfoText>
                </InfoItem>
              )}

              {contactInfo.github && (
                <InfoItem
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                  <InfoText>
                    <InfoLabel>GitHub</InfoLabel>
                    <InfoValue>@jeslxdev</InfoValue>
                  </InfoText>
                </InfoItem>
              )}

              {contactInfo.linkedin && (
                <InfoItem
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                  <InfoText>
                    <InfoLabel>LinkedIn</InfoLabel>
                    <InfoValue>João Emanuel</InfoValue>
                  </InfoText>
                </InfoItem>
              )}
            </InfoList>
          </ContactInfo>

          <FormContainer>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">{t('contact.form.name')}</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('contact.form.namePlaceholder')}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="email">{t('contact.form.email')}</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('contact.form.emailPlaceholder')}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="subject">{t('contact.form.subject')}</Label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={t('contact.form.subjectPlaceholder')}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="message">{t('contact.form.message')}</Label>
                <TextArea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('contact.form.messagePlaceholder')}
                  required
                />
              </FormGroup>

              {isSubmitted && (
                <SuccessMessage>
                  ✅ {t('contact.form.success')}
                </SuccessMessage>
              )}

              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? '⏳ Enviando...' : t('contact.form.submit')}
              </SubmitButton>
            </Form>
          </FormContainer>
        </Content>
      </Container>
    </ContactSection>
  );
};
