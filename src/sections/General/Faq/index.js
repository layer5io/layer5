import React, { useState, useEffect } from "react";

import { Container, Row, Col } from "../../../reusecore/Layout";
import SectionTitle from "../../../reusecore/SectionTitle";
import { useStyledDarkMode } from "../../../theme/app/useStyledDarkMode";
// import { FiSearch } from "@react-icons/all-files/fi/FiSearch";
import Button from "../../../reusecore/Button";
import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionBody,
  IconWrapper,
  OpenIcon,
  CloseIcon
} from "../../../reusecore/Accordion";

import { IoIosArrowDown } from "@react-icons/all-files/io/IoIosArrowDown";
import { IoIosArrowUp } from "@react-icons/all-files/io/IoIosArrowUp";

import data from "../../../assets/data/faq";

import FaqSectionWrapper from "./faqSection.style";

const Faq = ({ category: propCategory, subcategory: propSubcategory }) => {
  // Get dark mode state
  const { isDark } = useStyledDarkMode();
  
  // Extract all available categories and subcategories from data
  const allCategories = [...new Set(data.faqs.map(faq => faq.category))];
  const allSubcategories = [...new Set(data.faqs.map(faq => faq.subcategory || "General"))];
  
  // Helper to normalize prop values to arrays (accept string or array)
  const normalizeToArray = (val) => {
    if (!val && val !== 0) return [];
    return Array.isArray(val) ? val : [val];
  };

  // State for selected filters (normalize incoming props)
  const [selectedCategories, setSelectedCategories] = useState(normalizeToArray(propCategory));
  const [selectedSubcategories, setSelectedSubcategories] = useState(normalizeToArray(propSubcategory));
  const [showFilters, setShowFilters] = useState(false);
  
  // Initialize filters from props
  useEffect(() => {
    if (propCategory !== undefined) setSelectedCategories(normalizeToArray(propCategory));
    if (propSubcategory !== undefined) setSelectedSubcategories(normalizeToArray(propSubcategory));
  }, [propCategory, propSubcategory]);
  
  // Handle category filter change
  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };
  
  // Handle subcategory filter change
  const handleSubcategoryChange = (subcategory) => {
    if (selectedSubcategories.includes(subcategory)) {
      setSelectedSubcategories(selectedSubcategories.filter(s => s !== subcategory));
    } else {
      setSelectedSubcategories([...selectedSubcategories, subcategory]);
    }
  };
  
  // Reset filters
  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedSubcategories([]);
  };
  
  let faq_keys = [];
  let faqs_data = [];

  // Get FAQs filtered by categories and subcategories
  if (selectedCategories.length === 0 && selectedSubcategories.length === 0) {
    faqs_data = data.faqs;
  } else {
    data.faqs.forEach(faq => {
      const matchesCategory = selectedCategories.length === 0 || 
        selectedCategories.includes("all") || 
        selectedCategories.includes(faq.category.toString());
      
      const matchesSubcategory = selectedSubcategories.length === 0 || 
        selectedSubcategories.includes("all") || 
        selectedSubcategories.includes(faq.subcategory || "General");

      if (matchesCategory && matchesSubcategory) {
        faqs_data.push(faq);
      }
    });
  }

  let faqs = faqs_data.reduce((faq, ind) => {
    const category = ind.category;
    const subcategory = ind.subcategory || "General";

    if (!faq[category]) {
      faq[category] = {};
    }

    if (!faq[category][subcategory]) {
      faq[category][subcategory] = [];
    }

    faq[category][subcategory].push(ind);
    return faq;
  }, {});

  faq_keys = Object.keys(faqs);

  return (
    <FaqSectionWrapper id="faq" $isDark={isDark}>
      <Container >
        <SectionTitle
          className="section-title"
          $leftAlign={true}
          $UniWidth="100%"
        >
          <h1>
            <span>Frequently Asked Questions</span>
          </h1>
          <div className="filter-controls">
            <Button 
              $primary={true}
              onClick={() => setShowFilters(!showFilters)}
              title={showFilters ? "Hide Filters" : "Show Filters"}
            />
            
            {selectedCategories.length > 0 || selectedSubcategories.length > 0 ? (
              <Button 
                onClick={resetFilters}
                title="Reset Filters"
                $secondary={true}
              />
            ) : null}
          </div>
          
          {showFilters && (
            <div className="filter-container">
              <Row>
                <Col md={6} sm={12}>
                  <div className="filter-group">
                    <h3 className="filter-title">Filter by Category</h3>
                    <div className="filter-options">
                      {allCategories.map((cat, index) => (
                        <div key={index} className="filter-option">
                          <input
                            type="checkbox"
                            id={`category-${cat}`}
                            checked={selectedCategories.includes(cat)}
                            onChange={() => handleCategoryChange(cat)}
                          />
                          <label htmlFor={`category-${cat}`} className={isDark ? 'dark-mode-text' : ''}>{cat}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                </Col>
                <Col md={6} sm={12}>
                  <div className="filter-group">
                    <h3 className="filter-title">Filter by Subcategory</h3>
                    <div className="filter-options">
                      {allSubcategories.map((subcat, index) => (
                        <div key={index} className="filter-option">
                          <input
                            type="checkbox"
                            id={`subcategory-${subcat}`}
                            checked={selectedSubcategories.includes(subcat)}
                            onChange={() => handleSubcategoryChange(subcat)}
                          />
                          <label htmlFor={`subcategory-${subcat}`} className={isDark ? 'dark-mode-text' : ''}>{subcat}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          )}
          
          {(selectedCategories.length > 0 || selectedSubcategories.length > 0) && (
            <div className="active-filters">
              <p>
                Showing {faqs_data.length} {faqs_data.length === 1 ? 'FAQ' : 'FAQs'}
                {selectedCategories.length > 0 && (
                  <> in categories: <strong>{selectedCategories.join(', ')}</strong></>
                )}
                {selectedSubcategories.length > 0 && (
                  <> under subcategories: <strong>{selectedSubcategories.join(', ')}</strong></>
                )}
              </p>
            </div>
          )}
        </SectionTitle>
        {faqs_data.length > 0 ? (
          <Accordion allowMultipleExpanded={false} allowZeroExpanded={true}>
            {faq_keys.map((categoryKey, categoryIndex) => (
              <React.Fragment key={categoryIndex}>
                <h2 className="category_name">{categoryKey}</h2>
                {Object.keys(faqs[categoryKey]).map((subcategoryKey, subcategoryIndex) => (
                  <React.Fragment key={subcategoryIndex}>
                    {Object.keys(faqs[categoryKey]).length > 1 && (
                      <h3 className="subcategory_name">{subcategoryKey}</h3>
                    )}
                    {faqs[categoryKey][subcategoryKey].map((faq, faqIndex) => (
                      <AccordionItem key={faqIndex}>
                        <AccordionTitle>
                          <IconWrapper>
                            <h5>{faq.question}</h5>
                            <OpenIcon>
                              <IoIosArrowUp size={22} color="white" />
                            </OpenIcon>
                            <CloseIcon>
                              <IoIosArrowDown size={22} color="white" />
                            </CloseIcon>
                          </IconWrapper>
                        </AccordionTitle>
                        <AccordionBody>
                          <div className="inner">
                            {
                              faq.answer.length >= 1 ? <ul>{faq.answer.map((ans, id) => (<li key={id}><p key={id}>{ans}</p></li>))}</ul> : <br />
                            }
                            {faq.link &&
                             <div className="faqbutton">
                               {faq.link.startsWith("/")
                                 ? <Button $primary className="faqbutton" $url={faq.link} title={faq.linktext} $external={false} />
                                 :  <Button $primary className="faqbutton" $url={faq.link} title={faq.linktext} $external={true} />
                               }
                             </div>
                            }
                          </div>
                        </AccordionBody>
                      </AccordionItem>
                    ))}
                  </React.Fragment>
                ))}
              </React.Fragment>
            ))}
          </Accordion>
        ) : (
          <div className="no-results">
            <h3>No FAQs match the selected filters</h3>
            <p>Please try adjusting your filter criteria or <Button onClick={resetFilters} title="Reset Filters" /></p>
          </div>
        )}
        <div className="askus_section">
          <h2>Didn't find an answer to your question?</h2>
          <Button $secondary title="Just Ask" $url="/company/contact" $external={false} />
        </div>
      </Container>
    </FaqSectionWrapper>
  );
};

export default Faq;
