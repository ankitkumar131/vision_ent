/**
 * VISION ENTERPRISES - Global JavaScript
 * Handles navbar, mobile menu, form validation, and shared functionality
 */

// === DOM Content Loaded ===
document.addEventListener('DOMContentLoaded', function() {
  initializeNavbar();
  initializeMobileMenu();
  initializeNavbarScroll();
  initializeFormValidation();
  initializeSmoothScroll();
  initializeAnimations();
  initializePropertyTypeSelection();
});

// === Property Type Selection (quote.html) ===
function initializePropertyTypeSelection() {
  const propertyRadios = document.querySelectorAll('input[name="property_type"]');
  const propertyImg = document.getElementById('propertyTypeImg');
  const propertyTitle = document.getElementById('propertyTitle');
  const propertyDesc = document.getElementById('propertyDescription');

  if (propertyRadios.length > 0 && propertyImg && propertyTitle && propertyDesc) {
    propertyRadios.forEach(radio => {
      radio.addEventListener('change', function() {
        const type = this.value;

        // Fade out
        propertyImg.style.opacity = '0';
        propertyTitle.style.opacity = '0';
        propertyDesc.style.opacity = '0';

        setTimeout(() => {
          if (type === 'residential') {
            propertyImg.src = 'assets/images/installing_residental_Solar.png';
            propertyImg.alt = 'Residential Solar Installation';
            propertyTitle.textContent = 'Residential Solar Solutions';
            propertyDesc.textContent = 'Transform your home with clean, renewable energy. Our residential solar installations help you save on electricity bills while reducing your carbon footprint. Eligible for government subsidies up to ₹78,000.';
          } else {
            propertyImg.src = 'assets/images/installing_commercial_Solar.png';
            propertyImg.alt = 'Commercial Solar Installation';
            propertyTitle.textContent = 'Commercial Solar Solutions';
            propertyDesc.textContent = 'Optimize your business operations with utility-scale solar architecture. Reduce overhead costs, improve ESG ratings, and achieve energy independence with our high-yield commercial systems.';
          }

          // Fade in
          propertyImg.style.opacity = '1';
          propertyTitle.style.opacity = '1';
          propertyDesc.style.opacity = '1';
        }, 300);
      });
    });
  }
}

// === Navbar Active Link ===
function initializeNavbar() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.navbar-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// === Navbar Scroll Effect ===
function initializeNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  
  if (navbar) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 16px rgba(25, 28, 29, 0.08)';
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
      } else {
        navbar.style.boxShadow = '0 2px 8px rgba(25, 28, 29, 0.04)';
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.85)';
      }
    });
  }
}

// === Mobile Menu Toggle ===
function initializeMobileMenu() {
  const mobileToggle = document.querySelector('.navbar-mobile-toggle');
  const navbarMenu = document.querySelector('.navbar-menu');

  if (mobileToggle && navbarMenu) {
    mobileToggle.addEventListener('click', function() {
      const isOpen = navbarMenu.classList.toggle('mobile-open');
      
      // Update icon
      const icon = mobileToggle.querySelector('.material-symbols-outlined');
      icon.textContent = isOpen ? 'close' : 'menu';
      
      // Accessibility
      mobileToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu when clicking on a link
    const navLinks = navbarMenu.querySelectorAll('.navbar-link');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        closeMobileMenu();
      });
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && navbarMenu.classList.contains('mobile-open')) {
        closeMobileMenu();
      }
    });
    
    // Close on outside click
    document.addEventListener('click', function(e) {
      if (navbarMenu.classList.contains('mobile-open') && 
          !navbarMenu.contains(e.target) && 
          !mobileToggle.contains(e.target)) {
        closeMobileMenu();
      }
    });
  }
  
  function closeMobileMenu() {
    const navbarMenu = document.querySelector('.navbar-menu');
    const mobileToggle = document.querySelector('.navbar-mobile-toggle');
    
    if (navbarMenu && mobileToggle) {
      navbarMenu.classList.remove('mobile-open');
      mobileToggle.querySelector('.material-symbols-outlined').textContent = 'menu';
      mobileToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  }
}

// === Form Validation ===
function initializeFormValidation() {
  const forms = document.querySelectorAll('form');

  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      if (validateForm(form)) {
        // Form is valid, you can submit it here
        console.log('Form submitted successfully');
        showNotification('Form submitted successfully!', 'success');
        form.reset();
      } else {
        showNotification('Please fill in all required fields', 'error');
      }
    });

    // Add real-time validation on inputs
    const inputs = form.querySelectorAll('.form-input, .form-select, .form-textarea');
    inputs.forEach(input => {
      input.addEventListener('blur', function() {
        validateField(input);
      });
    });
  });
}

function validateForm(form) {
  let isValid = true;
  const requiredFields = form.querySelectorAll('[required]');

  requiredFields.forEach(field => {
    if (!validateField(field)) {
      isValid = false;
    }
  });

  return isValid;
}

function validateField(field) {
  const value = field.value.trim();
  let isValid = true;

  // Required validation
  if (field.hasAttribute('required') && !value) {
    isValid = false;
  }

  // Email validation
  if (field.type === 'email' && value) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    isValid = emailPattern.test(value);
  }

  // Phone validation
  if (field.type === 'tel' && value) {
    const phonePattern = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;
    isValid = phonePattern.test(value);
  }

  // Update UI
  if (isValid) {
    field.style.borderBottomColor = 'var(--secondary)';
  } else if (value) {
    field.style.borderBottomColor = 'var(--error)';
  }

  return isValid;
}

// === Smooth Scroll ===
function initializeSmoothScroll() {
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

  smoothScrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// === Scroll Animations ===
function initializeAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements
  const animatedElements = document.querySelectorAll('.card, .bento-item, .process-step, .contact-card');
  animatedElements.forEach(el => {
    observer.observe(el);
  });
}

// === Notification System ===
function showNotification(message, type = 'info') {
  // Remove existing notification
  const existingNotification = document.querySelector('.notification');
  if (existingNotification) {
    existingNotification.remove();
  }

  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <span class="material-symbols-outlined">${getNotificationIcon(type)}</span>
      <p>${message}</p>
    </div>
  `;

  // Add styles
  notification.style.cssText = `
    position: fixed;
    top: 80px;
    right: 20px;
    z-index: 9999;
    padding: 1rem 1.5rem;
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-md);
    animation: slideIn 0.3s ease-out;
  `;

  const colors = {
    success: { bg: 'var(--secondary-container)', color: 'var(--on-secondary-container)' },
    error: { bg: 'var(--error-container)', color: 'var(--on-error-container)' },
    info: { bg: 'var(--primary-container)', color: 'var(--on-primary-container)' }
  };

  const color = colors[type] || colors.info;
  notification.style.backgroundColor = color.bg;
  notification.style.color = color.color;

  // Add notification content styles
  const content = notification.querySelector('.notification-content');
  content.style.cssText = `
    display: flex;
    align-items: center;
    gap: 0.75rem;
  `;

  document.body.appendChild(notification);

  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease-out';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

function getNotificationIcon(type) {
  const icons = {
    success: 'check_circle',
    error: 'error',
    info: 'info'
  };
  return icons[type] || icons.info;
}

// === Utility Functions ===

// Format phone number
function formatPhoneNumber(phone) {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `+91 ${cleaned.slice(0, 5)} ${cleaned.slice(5)}`;
  }
  return phone;
}

// Calculate solar savings (basic estimator)
function calculateSolarSavings(monthlyBill) {
  const bill = parseFloat(monthlyBill);
  if (isNaN(bill) || bill <= 0) {
    return null;
  }

  // Rough estimation logic
  const systemSize = (bill / 1000) * 1.5; // kW
  const annualSavings = bill * 12 * 0.8; // 80% savings
  const subsidy = Math.min(systemSize * 20000, 78000); // Up to 78,000

  return {
    systemSize: systemSize.toFixed(2),
    annualSavings: annualSavings.toFixed(0),
    subsidy: subsidy.toFixed(0),
    paybackPeriod: ((systemSize * 50000 - subsidy) / annualSavings).toFixed(1)
  };
}

// === Add keyframe animations dynamically ===
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// === Export functions for use in other scripts ===
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    validateForm,
    validateField,
    showNotification,
    formatPhoneNumber,
    calculateSolarSavings
  };
}
