import React, { useState } from "react";

import { Container } from "../../../reusecore/Layout";
import SectionTitle from "../../../reusecore/SectionTitle";
import { useStyledDarkMode } from "../../../theme/app/useStyledDarkMode";
import { SistentThemeProvider, Collapse, Box } from "@sistent/sistent";
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

const Faq = () => {
  const { isDark } = useStyledDarkMode();

  // Extract all available categories
  const allCategories = [...new Set(data.faqs.map(faq => faq.category))].sort();

  // Function to get subcategories for selected categories
  const getSubcategoriesForCategories = (categories) => {
    if (!categories || categories.length === 0) return [];
    const subCategories = new Set();
    data.faqs.forEach(faq => {
      if (categories.includes(faq.category)) {
        subCategories.add(faq.subcategory || "General");
      }
    });
    return [...subCategories].sort();
  };

  // State for filters
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  // Handle category filter change
  const handleCategoryChange = (category) => {
    let newCategories;
    if (selectedCategories.includes(category)) {
      // Remove category and its subcategories
      newCategories = selectedCategories.filter(c => c !== category);
      const remainingValidSubcategories = getSubcategoriesForCategories(newCategories);
      setSelectedSubcategories(prev =>
        prev.filter(sub => remainingValidSubcategories.includes(sub))
      );
    } else {
      // Add category
      newCategories = [...selectedCategories, category];
    }
    setSelectedCategories(newCategories);
  };

  // Handle subcategory filter change
  const handleSubcategoryChange = (subcategory) => {
    setSelectedSubcategories(prev =>
      prev.includes(subcategory)
        ? prev.filter(s => s !== subcategory)
        : [...prev, subcategory]
    );
  };

  // Reset filters
  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedSubcategories([]);
  };

  // Get available subcategories based on selected categories
  const availableSubcategories = getSubcategoriesForCategories(selectedCategories);

  // Filter FAQs based on selected categories and subcategories
  const faqs_data = data.faqs.filter(faq => {
    // If no categories selected, show all FAQs
    if (selectedCategories.length === 0) return true;

    // Check if FAQ's category is selected
    const categoryMatches = selectedCategories.includes(faq.category);
    if (!categoryMatches) return false;

    // If category matches but no subcategories selected, show all FAQs in that category
    if (selectedSubcategories.length === 0) return true;

    // Check if FAQ's subcategory matches
    const faqSubcategory = faq.subcategory || "General";
    return selectedSubcategories.includes(faqSubcategory);
  });

  // Group FAQs by category and subcategory
  const faqs = faqs_data.reduce((acc, faq) => {
    const category = faq.category;
    const subcategory = faq.subcategory || "General";

    if (!acc[category]) {
      acc[category] = {};
    }
    if (!acc[category][subcategory]) {
      acc[category][subcategory] = [];
    }
    acc[category][subcategory].push(faq);
    return acc;
  }, {});

  const faq_keys = Object.keys(faqs);

  return (
    <FaqSectionWrapper id="faq">
      <Container>
        <SectionTitle className="section-title" $leftAlign={true} $UniWidth="100%">
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
                $secondary={true}
                onClick={resetFilters}
                title="Reset Filters"
              />
            )}
          </div>

          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <Collapse in={showFilters}>
              <Box
                sx={{
                  padding: 3,
                  borderRadius: 2,
                  marginBottom: 3,
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                  gap: 3,
                  bgcolor: "background.default",
                  border: "1px solid",
                  borderColor: "divider"
                }}
              >
                <Box>
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
                        <label htmlFor={`category-${cat}`}>{cat}</label>
                      </div>
                    ))}
                  </div>
                </Box>
                <Box>
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
                            <label htmlFor={`subcategory-${subcat}`}>{subcat}</label>
                          </div>
                        ))
                      ) : (
                        <p className="filter-message">No subcategories available for the selected categories.</p>
                      )}
                    </div>
                  ) : (
                    <p className="filter-message">Please select a category first to see relevant subcategories.</p>
                  )}
                </Box>
              </Box>
            </Collapse>
          </SistentThemeProvider>

          {faqs_data.length > 0 && (
            <div className="active-filters">
              <p>
                Showing {faqs_data.length} {faqs_data.length === 1 ? "FAQ" : "FAQs"}
                {selectedCategories.length > 0 && (
                  <> in categories: <strong>{selectedCategories.join(", ")}</strong></>
                )}
                {selectedSubcategories.length > 0 && (
                  <> under subcategories: <strong>{selectedSubcategories.join(", ")}</strong></>
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
                            {faq.answer.length >= 1 ? (
                              <ul>
                                {faq.answer.map((ans, id) => (
                                  <li key={id}><p>{ans}</p></li>
                                ))}
                              </ul>
                            ) : (
                              <br />
                            )}
                            {faq.link && (
                              <div className="faqbutton">
                                <Button
                                  $primary
                                  className="faqbutton"
                                  $url={faq.link}
                                  title={faq.linktext}
                                  $external={!faq.link.startsWith("/")}
                                />
                              </div>
                            )}
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