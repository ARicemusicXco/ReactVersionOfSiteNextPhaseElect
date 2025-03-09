import React, { useState } from 'react';
import styled from 'styled-components';

const FAQContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.text};
`;

const FAQSection = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.text};
  padding-bottom: ${({ theme }) => theme.spacing.md};
  border-bottom: 2px solid ${({ theme }) => theme.colors.lightGray};
`;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

interface FAQItemProps {
  $isOpen: boolean;
}

const FAQItem = styled.div<FAQItemProps>`
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};
  overflow: hidden;
`;

const Question = styled.button<FAQItemProps>`
  width: 100%;
  text-align: left;
  padding: ${({ theme }) => theme.spacing.lg};
  background: white;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme, $isOpen }) => $isOpen ? theme.colors.primary : theme.colors.text};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Answer = styled.div<FAQItemProps>`
  padding: ${({ $isOpen, theme }) => $isOpen ? theme.spacing.lg : '0'};
  padding-top: ${({ $isOpen }) => $isOpen ? '0' : '0'};
  max-height: ${({ $isOpen }) => $isOpen ? '500px' : '0'};
  opacity: ${({ $isOpen }) => $isOpen ? '1' : '0'};
  transition: all 0.3s ease-in-out;
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.8;
`;

const Icon = styled.span<FAQItemProps>`
  transform: rotate(${({ $isOpen }) => $isOpen ? '180deg' : '0'});
  transition: transform 0.3s ease;
`;

interface FAQItemData {
  question: string;
  answer: string;
}

interface FAQSectionData {
  title: string;
  items: FAQItemData[];
}

const faqData: FAQSectionData[] = [
  {
    title: "Solar Energy",
    items: [
      {
        question: "How do solar panels work?",
        answer: "Solar panels work by converting sunlight into electricity through a process called the photovoltaic effect. When sunlight hits the solar panels, it creates an electric field across layers of silicon cells, generating direct current (DC) electricity. This DC electricity is then converted to alternating current (AC) by an inverter, making it usable in your home."
      },
      {
        question: "How much can I save with solar panels?",
        answer: "Savings vary depending on factors like your current electricity usage, local utility rates, and system size. On average, homeowners can save between 40-70% on their electricity bills. We provide detailed savings estimates during your consultation."
      },
      {
        question: "How long do solar panels last?",
        answer: "Most solar panels are warrantied for 25 years and can last even longer. Their efficiency typically decreases by only about 0.5% per year, meaning they'll still produce about 87.5% of their original output after 25 years."
      },
      {
        question: "What happens during power outages?",
        answer: "Standard grid-tied solar systems will shut off during power outages for safety reasons. However, if you add battery storage to your system, you can continue to power essential appliances during outages."
      }
    ]
  },
  {
    title: "Electrical Services",
    items: [
      {
        question: "What electrical services do you offer?",
        answer: "We offer a comprehensive range of electrical services including residential and commercial installations, repairs, maintenance, upgrades, lighting design, EV charger installation, and emergency electrical services."
      },
      {
        question: "Are your electricians licensed and insured?",
        answer: "Yes, all our electricians are fully licensed, bonded, and insured. They undergo regular training to stay current with the latest electrical codes and safety standards."
      },
      {
        question: "How quickly can you respond to electrical emergencies?",
        answer: "We offer 24/7 emergency electrical services and typically respond within 1-2 hours for urgent situations. Our team is always ready to handle any electrical emergency."
      }
    ]
  },
  {
    title: "Installation & Maintenance",
    items: [
      {
        question: "How long does solar installation take?",
        answer: "A typical residential solar installation takes 1-3 days once permits are approved. The entire process, including design, permitting, and utility interconnection, usually takes 2-3 months."
      },
      {
        question: "Do solar panels require maintenance?",
        answer: "Solar panels require minimal maintenance. Regular cleaning and annual inspections are recommended to ensure optimal performance. We offer maintenance plans to keep your system running efficiently."
      },
      {
        question: "What happens if my solar panels are damaged?",
        answer: "Our solar panels come with comprehensive warranties covering both equipment and workmanship. If your panels are damaged, we'll assess the situation and handle repairs or replacements as needed under warranty."
      }
    ]
  }
];

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (sectionIndex: number, itemIndex: number) => {
    const key = `${sectionIndex}-${itemIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <FAQContainer>
      <PageTitle>Frequently Asked Questions</PageTitle>
      
      {faqData.map((section, sectionIndex) => (
        <FAQSection key={section.title}>
          <SectionTitle>{section.title}</SectionTitle>
          <FAQList>
            {section.items.map((item, itemIndex) => {
              const key = `${sectionIndex}-${itemIndex}`;
              const isOpen = openItems[key] || false;
              
              return (
                <FAQItem key={key} $isOpen={isOpen}>
                  <Question
                    onClick={() => toggleItem(sectionIndex, itemIndex)}
                    $isOpen={isOpen}
                  >
                    {item.question}
                    <Icon $isOpen={isOpen}>▼</Icon>
                  </Question>
                  <Answer $isOpen={isOpen}>
                    {item.answer}
                  </Answer>
                </FAQItem>
              );
            })}
          </FAQList>
        </FAQSection>
      ))}
    </FAQContainer>
  );
};

export default FAQ; 