import React, { useState, useEffect } from "react";

import { Container, Row, Col } from "../../../reusecore/Layout";
import SectionTitle from "../../../reusecore/SectionTitle";
import { useStyledDarkMode } from "../../../theme/app/useStyledDarkMode";
import { SistentThemeProvider, Collapse } from "@sistent/sistent";
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

const Faq = (props) => {
  const propCategory = props.category;
  const propSubcategory = props.subcategory;
  const { isDark } = useStyledDarkMode();

  const allCategories = [...new Set(data.faqs.map(faq => faq.category))].sort();

  const allSubcategoriesRaw = [...new Set(data.faqs.map(faq => faq.subcategory || "General"))].sort();
  const allSubcategories = allSubcategoriesRaw.filter(subcat => !allCategories.includes(subcat));

  const normalizeToArray = (val) => {
    if (!val && val !== 0) return [];
    return Array.isArray(val) ? val : [val];
  };

  const [selectedCategories, setSelectedCategories] = useState(normalizeToArray(propCategory));
  const [selectedSubcategories, setSelectedSubcategories] = useState(normalizeToArray(propSubcategory));
  const [showFilters, setShowFilters] = useState(false);

  const [availableSubcategories, setAvailableSubcategories] = useState(allSubcategories);

  useEffect(() => {
    if (propCategory !== undefined) setSelectedCategories(normalizeToArray(propCategory));
    if (propSubcategory !== undefined) setSelectedSubcategories(normalizeToArray(propSubcategory));
  }, [propCategory, propSubcategory]);

  const getSubcategoriesForCategories = (categories) => {
    if (!categories || categories.length === 0) {
      return allSubcategories;
    }

    const subCategories = new Set();
    data.faqs.forEach(faq => {
      if (categories.includes(faq.category)) {
        subCategories.add(faq.subcategory || "General");
      }
    });

    return [...subCategories].sort();
  };

  useEffect(() => {
    setAvailableSubcategories(getSubcategoriesForCategories(selectedCategories));
  }, [selectedCategories]);

  const handleCategoryChange = (category) => {
    let newCategories;

    if (selectedCategories.includes(category)) {
      newCategories = selectedCategories.filter(c => c !== category);
    } else {
      newCategories = [...selectedCategories, category];
    }

    setSelectedCategories(newCategories);

    const newAvailableSubcategories = getSubcategoriesForCategories(newCategories);
    setAvailableSubcategories(newAvailableSubcategories);

    const validSubcategories = selectedSubcategories.filter(
      subcat => newAvailableSubcategories.includes(subcat)
    );

    if (validSubcategories.length !== selectedSubcategories.length) {
      setSelectedSubcategories(validSubcategories);
    }
  };

  const handleSubcategoryChange = (subcategory) => {
    if (selectedSubcategories.includes(subcategory)) {
      const newSubcategories = selectedSubcategories.filter(s => s !== subcategory);
      setSelectedSubcategories(newSubcategories);
    } else {
      const newSubcategories = [...selectedSubcategories, subcategory];
      setSelectedSubcategories(newSubcategories);
    }
  };

  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedSubcategories([]);
    setAvailableSubcategories(allSubcategories);
  };

  let faq_keys = [];
  let faqs_data = [];

  if (selectedCategories.length === 0 && selectedSubcategories.length === 0) {
    faqs_data = data.faqs;
  } else {
    faqs_data = data.faqs.filter(faq => {
      const matchesCategory = selectedCategories.length === 0 ||
        selectedCategories.includes("all") ||
        selectedCategories.includes(faq.category.toString());

      const subcatValue = faq.subcategory || "General";
      const matchesSubcategory = selectedSubcategories.length === 0 ||
        selectedSubcategories.includes("all") ||
        selectedSubcategories.includes(subcatValue);

      return matchesCategory && matchesSubcategory;
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
    <FaqSectionWrapper id="faq">
      <Container>
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

            {(selectedCategories.length > 0 || selectedSubcategories.length > 0) && (
              <Button
                onClick={resetFilters}
                title="Reset Filters"
              />
            )}
          </div>

          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <Collapse in={showFilters} timeout="auto">
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
                            <label htmlFor={`category-${cat}`}>
                              {cat}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Col>
                  <Col md={6} sm={12}>
                    <div className="filter-group">
                      <h3 className="filter-title">Filter by Subcategory</h3>
                      {selectedCategories.length > 0 ? (
                        <div className="filter-options">
                          {availableSubcategories.length > 0 ? (
                            availableSubcategories.map((subcat, index) => (
                              <div key={index} className="filter-option">
                                <input
                                  type="checkbox"
                                  id={`subcategory-${subcat}`}
                                  checked={selectedSubcategories.includes(subcat)}
                                  onChange={() => handleSubcategoryChange(subcat)}
                                />
                                <label htmlFor={`subcategory-${subcat}`}>
                                  {subcat}
                                </label>
                              </div>
                            ))
                          ) : (
                            <p>No subcategories available for the selected categories.</p>
                          )}
                        </div>
                      ) : (
                        <div>
                          <p>Please select a category first to see relevant subcategories.</p>
                          <div className="filter-options">
                            {allSubcategories.map((subcat, index) => (
                              <div key={index} className="filter-option">
                                <input
                                  type="checkbox"
                                  id={`subcategory-${subcat}`}
                                  checked={selectedSubcategories.includes(subcat)}
                                  onChange={() => handleSubcategoryChange(subcat)}
                                />
                                <label htmlFor={`subcategory-${subcat}`}>
                                  {subcat}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </Col>
                </Row>
              </div>
            </Collapse>
          </SistentThemeProvider>

          {(selectedCategories.length > 0 || selectedSubcategories.length > 0 || faqs_data.length > 0) && (
            <div className="active-filters">
              <p>
                {selectedCategories.length > 0 || selectedSubcategories.length > 0 ? (
                  <>
                    Showing {faqs_data.length} {faqs_data.length === 1 ? "FAQ" : "FAQs"}
                    {selectedCategories.length > 0 && (
                      <> in categories: <strong>{selectedCategories.join(", ")}</strong></>
                    )}
                    {selectedSubcategories.length > 0 && (
                      <> under subcategories: <strong>{selectedSubcategories.join(", ")}</strong></>
                    )}
                  </>
                ) : (
                  <>Showing all {faqs_data.length} FAQs</>
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
                                  : <Button $primary className="faqbutton" $url={faq.link} title={faq.linktext} $external={true} />
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