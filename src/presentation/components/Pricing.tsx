import { useState } from 'react';
import styled from 'styled-components';
import { fadeInUp } from '../styles/animations';
import { useTranslation } from 'react-i18next';
import { FaCheck, FaRocket, FaStar, FaCrown, FaCalculator } from 'react-icons/fa';

const PricingSection = styled.section`
  padding: ${props => props.theme.spacing['4xl']} ${props => props.theme.spacing.xl};
  background-color: ${props => props.theme.colors.background};
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
  color: ${props => props.theme.colors.textSecondary};
  max-width: 600px;
  margin: 0 auto;
  animation: ${fadeInUp} 1s ease-out;
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${props => props.theme.spacing['2xl']};
  margin-bottom: ${props => props.theme.spacing['4xl']};

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing.xl};
  }
`;

const PricingCard = styled.div<{ featured?: boolean }>`
  background: ${props => props.theme.colors.backgroundCard};
  border: 2px solid ${props => props.featured ? props.theme.colors.primary : props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: ${props => props.theme.spacing['2xl']};
  position: relative;
  transition: all ${props => props.theme.transitions.base};
  animation: ${fadeInUp} 1.2s ease-out;

  ${props => props.featured && `
    transform: scale(1.05);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  `}

  &:hover {
    transform: ${props => props.featured ? 'scale(1.08)' : 'scale(1.03)'};
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    transform: none !important;

    &:hover {
      transform: translateY(-5px) !important;
    }
  }
`;

const FeaturedBadge = styled.div`
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.accent});
  color: ${props => props.theme.colors.text};
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius.full};
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: ${props => props.theme.fontWeights.bold};
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};
`;

const PlanIcon = styled.div`
  font-size: 3rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const PlanName = styled.h3`
  font-size: ${props => props.theme.fontSizes['2xl']};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const PlanDescription = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: ${props => props.theme.spacing.xl};
  font-size: ${props => props.theme.fontSizes.sm};
`;

const PlanPrice = styled.div`
  margin-bottom: ${props => props.theme.spacing.xl};
`;

const Price = styled.div`
  font-size: ${props => props.theme.fontSizes['3xl']};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.xs};

  span {
    font-size: ${props => props.theme.fontSizes.lg};
    color: ${props => props.theme.colors.textSecondary};
  }
`;

const PriceNote = styled.p`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.textSecondary};
`;

const FeatureList = styled.ul`
  list-style: none;
  margin-bottom: ${props => props.theme.spacing.xl};
`;

const Feature = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.text};

  svg {
    color: ${props => props.theme.colors.primary};
    margin-top: 4px;
    flex-shrink: 0;
  }
`;

const PlanButton = styled.button`
  width: 100%;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.accent});
  color: ${props => props.theme.colors.text};
  padding: ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.lg};
  border: none;
  font-size: ${props => props.theme.fontSizes.base};
  font-weight: ${props => props.theme.fontWeights.semibold};
  cursor: pointer;
  transition: all ${props => props.theme.transitions.base};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

// Budget Calculator
const CalculatorSection = styled.div`
  background: ${props => props.theme.colors.backgroundCard};
  border: 2px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: ${props => props.theme.spacing['2xl']};
  animation: ${fadeInUp} 1.4s ease-out;
`;

const CalculatorHeader = styled.div`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.xl};
`;

const CalculatorTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes['2xl']};
  margin-bottom: ${props => props.theme.spacing.md};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.md};

  svg {
    color: ${props => props.theme.colors.primary};
  }
`;

const CalculatorGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing.xl};

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const CalculatorForm = styled.div`
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
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.text};
  font-weight: ${props => props.theme.fontWeights.medium};
`;

const Select = styled.select`
  padding: ${props => props.theme.spacing.md};
  background: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.lg};
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes.base};
  cursor: pointer;
  transition: all ${props => props.theme.transitions.base};

  &:focus {
    border-color: ${props => props.theme.colors.primary};
    outline: none;
    box-shadow: 0 0 0 3px ${props => props.theme.colors.primary}33;
  }

  option {
    background: ${props => props.theme.colors.backgroundCard};
    color: ${props => props.theme.colors.text};
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  cursor: pointer;
  padding: ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.borderRadius.md};
  transition: all ${props => props.theme.transitions.base};

  &:hover {
    background: ${props => props.theme.colors.background};
  }

  input {
    width: 20px;
    height: 20px;
    cursor: pointer;
    accent-color: ${props => props.theme.colors.primary};
  }

  span {
    color: ${props => props.theme.colors.text};
    font-size: ${props => props.theme.fontSizes.sm};
  }
`;

const EstimateResult = styled.div`
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}22, ${props => props.theme.colors.accent}22);
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: ${props => props.theme.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};
`;

const EstimateTitle = styled.h4`
  font-size: ${props => props.theme.fontSizes.xl};
  text-align: center;
`;

const EstimateDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};
`;

const EstimateItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.spacing.sm};
  border-bottom: 1px solid ${props => props.theme.colors.border};

  &:last-child {
    border-bottom: none;
    padding-top: ${props => props.theme.spacing.md};
    font-size: ${props => props.theme.fontSizes.lg};
    font-weight: ${props => props.theme.fontWeights.bold};
  }
`;

const EstimateLabel = styled.span`
  color: ${props => props.theme.colors.textSecondary};
  font-size: ${props => props.theme.fontSizes.sm};
`;

const EstimateValue = styled.span`
  color: ${props => props.theme.colors.text};
  font-weight: ${props => props.theme.fontWeights.semibold};
`;

const TotalValue = styled.span`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSizes['2xl']};
  font-weight: ${props => props.theme.fontWeights.bold};
`;

const ContactButton = styled.button`
  width: 100%;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.accent});
  color: ${props => props.theme.colors.text};
  padding: ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.lg};
  border: none;
  font-size: ${props => props.theme.fontSizes.base};
  font-weight: ${props => props.theme.fontWeights.semibold};
  cursor: pointer;
  transition: all ${props => props.theme.transitions.base};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const Pricing: React.FC = () => {
  const { t } = useTranslation();

  const [projectType, setProjectType] = useState('landing');
  const [features, setFeatures] = useState<string[]>([]);
  const [urgency, setUrgency] = useState('normal');

  const basePrices: Record<string, number> = {
    landing: 800,
    institutional: 1500,
    ecommerce: 3500,
    webapp: 5000,
    mobile: 6000,
    custom: 0,
  };

  const featurePrices: Record<string, number> = {
    auth: 500,
    payment: 800,
    admin: 600,
    api: 700,
    multilang: 400,
    seo: 300,
  };

  const urgencyMultiplier: Record<string, number> = {
    urgent: 1.5,
    normal: 1,
    flexible: 0.85,
  };

  const toggleFeature = (feature: string) => {
    setFeatures(prev =>
      prev.includes(feature)
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    );
  };

  const calculateTotal = () => {
    const base = basePrices[projectType] || 0;
    const featuresTotal = features.reduce((sum, f) => sum + (featurePrices[f] || 0), 0);
    const subtotal = base + featuresTotal;
    return Math.round(subtotal * urgencyMultiplier[urgency]);
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <PricingSection id="pricing">
      <Container>
        <Header>
          <SectionTitle>{t('pricing.title')}</SectionTitle>
          <SectionSubtitle>{t('pricing.subtitle')}</SectionSubtitle>
        </Header>

        <PricingGrid>
          <PricingCard>
            <PlanIcon><FaRocket /></PlanIcon>
            <PlanName>{t('pricing.starter.name')}</PlanName>
            <PlanDescription>{t('pricing.starter.description')}</PlanDescription>
            <PlanPrice>
              <Price>R$ 800 <span>- 2.000</span></Price>
              <PriceNote>{t('pricing.starter.note')}</PriceNote>
            </PlanPrice>
            <FeatureList>
              <Feature><FaCheck /> {t('pricing.starter.features.0')}</Feature>
              <Feature><FaCheck /> {t('pricing.starter.features.1')}</Feature>
              <Feature><FaCheck /> {t('pricing.starter.features.2')}</Feature>
              <Feature><FaCheck /> {t('pricing.starter.features.3')}</Feature>
              <Feature><FaCheck /> {t('pricing.starter.features.4')}</Feature>
            </FeatureList>
            <PlanButton onClick={scrollToContact}>{t('pricing.cta')}</PlanButton>
          </PricingCard>

          <PricingCard featured>
            <FeaturedBadge><FaStar /> {t('pricing.popular')}</FeaturedBadge>
            <PlanIcon><FaStar /></PlanIcon>
            <PlanName>{t('pricing.professional.name')}</PlanName>
            <PlanDescription>{t('pricing.professional.description')}</PlanDescription>
            <PlanPrice>
              <Price>R$ 3.000 <span>- 8.000</span></Price>
              <PriceNote>{t('pricing.professional.note')}</PriceNote>
            </PlanPrice>
            <FeatureList>
              <Feature><FaCheck /> {t('pricing.professional.features.0')}</Feature>
              <Feature><FaCheck /> {t('pricing.professional.features.1')}</Feature>
              <Feature><FaCheck /> {t('pricing.professional.features.2')}</Feature>
              <Feature><FaCheck /> {t('pricing.professional.features.3')}</Feature>
              <Feature><FaCheck /> {t('pricing.professional.features.4')}</Feature>
              <Feature><FaCheck /> {t('pricing.professional.features.5')}</Feature>
            </FeatureList>
            <PlanButton onClick={scrollToContact}>{t('pricing.cta')}</PlanButton>
          </PricingCard>

          <PricingCard>
            <PlanIcon><FaCrown /></PlanIcon>
            <PlanName>{t('pricing.enterprise.name')}</PlanName>
            <PlanDescription>{t('pricing.enterprise.description')}</PlanDescription>
            <PlanPrice>
              <Price>R$ 10.000<span>+</span></Price>
              <PriceNote>{t('pricing.enterprise.note')}</PriceNote>
            </PlanPrice>
            <FeatureList>
              <Feature><FaCheck /> {t('pricing.enterprise.features.0')}</Feature>
              <Feature><FaCheck /> {t('pricing.enterprise.features.1')}</Feature>
              <Feature><FaCheck /> {t('pricing.enterprise.features.2')}</Feature>
              <Feature><FaCheck /> {t('pricing.enterprise.features.3')}</Feature>
              <Feature><FaCheck /> {t('pricing.enterprise.features.4')}</Feature>
              <Feature><FaCheck /> {t('pricing.enterprise.features.5')}</Feature>
              <Feature><FaCheck /> {t('pricing.enterprise.features.6')}</Feature>
            </FeatureList>
            <PlanButton onClick={scrollToContact}>{t('pricing.cta')}</PlanButton>
          </PricingCard>
        </PricingGrid>

        <CalculatorSection>
          <CalculatorHeader>
            <CalculatorTitle>
              <FaCalculator /> {t('pricing.calculator.title')}
            </CalculatorTitle>
          </CalculatorHeader>

          <CalculatorGrid>
            <CalculatorForm>
              <FormGroup>
                <Label>{t('pricing.calculator.projectType')}</Label>
                <Select value={projectType} onChange={(e) => setProjectType(e.target.value)}>
                  <option value="landing">{t('pricing.calculator.types.landing')}</option>
                  <option value="institutional">{t('pricing.calculator.types.institutional')}</option>
                  <option value="ecommerce">{t('pricing.calculator.types.ecommerce')}</option>
                  <option value="webapp">{t('pricing.calculator.types.webapp')}</option>
                  <option value="mobile">{t('pricing.calculator.types.mobile')}</option>
                  <option value="custom">{t('pricing.calculator.types.custom')}</option>
                </Select>
              </FormGroup>

              <FormGroup>
                <Label>{t('pricing.calculator.features')}</Label>
                <CheckboxGroup>
                  <CheckboxLabel>
                    <input
                      type="checkbox"
                      checked={features.includes('auth')}
                      onChange={() => toggleFeature('auth')}
                    />
                    <span>{t('pricing.calculator.featuresList.auth')}</span>
                  </CheckboxLabel>
                  <CheckboxLabel>
                    <input
                      type="checkbox"
                      checked={features.includes('payment')}
                      onChange={() => toggleFeature('payment')}
                    />
                    <span>{t('pricing.calculator.featuresList.payment')}</span>
                  </CheckboxLabel>
                  <CheckboxLabel>
                    <input
                      type="checkbox"
                      checked={features.includes('admin')}
                      onChange={() => toggleFeature('admin')}
                    />
                    <span>{t('pricing.calculator.featuresList.admin')}</span>
                  </CheckboxLabel>
                  <CheckboxLabel>
                    <input
                      type="checkbox"
                      checked={features.includes('api')}
                      onChange={() => toggleFeature('api')}
                    />
                    <span>{t('pricing.calculator.featuresList.api')}</span>
                  </CheckboxLabel>
                  <CheckboxLabel>
                    <input
                      type="checkbox"
                      checked={features.includes('multilang')}
                      onChange={() => toggleFeature('multilang')}
                    />
                    <span>{t('pricing.calculator.featuresList.multilang')}</span>
                  </CheckboxLabel>
                  <CheckboxLabel>
                    <input
                      type="checkbox"
                      checked={features.includes('seo')}
                      onChange={() => toggleFeature('seo')}
                    />
                    <span>{t('pricing.calculator.featuresList.seo')}</span>
                  </CheckboxLabel>
                </CheckboxGroup>
              </FormGroup>

              <FormGroup>
                <Label>{t('pricing.calculator.urgency')}</Label>
                <Select value={urgency} onChange={(e) => setUrgency(e.target.value)}>
                  <option value="urgent">{t('pricing.calculator.urgencyOptions.urgent')}</option>
                  <option value="normal">{t('pricing.calculator.urgencyOptions.normal')}</option>
                  <option value="flexible">{t('pricing.calculator.urgencyOptions.flexible')}</option>
                </Select>
              </FormGroup>
            </CalculatorForm>

            <EstimateResult>
              <EstimateTitle>{t('pricing.calculator.estimate')}</EstimateTitle>
              <EstimateDetails>
                <EstimateItem>
                  <EstimateLabel>{t('pricing.calculator.base')}</EstimateLabel>
                  <EstimateValue>R$ {basePrices[projectType].toLocaleString('pt-BR')}</EstimateValue>
                </EstimateItem>
                {features.length > 0 && (
                  <EstimateItem>
                    <EstimateLabel>{t('pricing.calculator.featuresTotal')}</EstimateLabel>
                    <EstimateValue>
                      R$ {features.reduce((sum, f) => sum + (featurePrices[f] || 0), 0).toLocaleString('pt-BR')}
                    </EstimateValue>
                  </EstimateItem>
                )}
                {urgency !== 'normal' && (
                  <EstimateItem>
                    <EstimateLabel>{t('pricing.calculator.urgencyFactor')}</EstimateLabel>
                    <EstimateValue>x{urgencyMultiplier[urgency]}</EstimateValue>
                  </EstimateItem>
                )}
                <EstimateItem>
                  <EstimateLabel>{t('pricing.calculator.total')}</EstimateLabel>
                  <TotalValue>R$ {calculateTotal().toLocaleString('pt-BR')}</TotalValue>
                </EstimateItem>
              </EstimateDetails>
              <ContactButton onClick={scrollToContact}>
                {t('pricing.calculator.requestQuote')}
              </ContactButton>
            </EstimateResult>
          </CalculatorGrid>
        </CalculatorSection>
      </Container>
    </PricingSection>
  );
};
