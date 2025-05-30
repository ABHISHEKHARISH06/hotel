import { useState, useEffect } from 'react';
import './ReservationForm.css';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 2,
    specialRequests: '',
    occasion: '',
    contactPreference: 'email'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [touched, setTouched] = useState({});

  // Available time slots
  const timeSlots = [
    '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'
  ];

  const occasions = [
    { value: '', label: 'Select an occasion (optional)' },
    { value: 'birthday', label: 'Birthday Celebration' },
    { value: 'anniversary', label: 'Anniversary' },
    { value: 'business', label: 'Business Meeting' },
    { value: 'date', label: 'Date Night' },
    { value: 'family', label: 'Family Gathering' },
    { value: 'celebration', label: 'Special Celebration' },
    { value: 'other', label: 'Other' }
  ];

  // Get today's date for min date validation
  const today = new Date().toISOString().split('T')[0];
  
  // Get max date (3 months from now)
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);
  const maxDateString = maxDate.toISOString().split('T')[0];

  // Validation rules
  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        if (!/^[a-zA-Z\s]+$/.test(value.trim())) return 'Name can only contain letters and spaces';
        return '';

      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) return 'Please enter a valid email address';
        return '';

      case 'phone':
        if (!value.trim()) return 'Phone number is required';
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        const cleanPhone = value.replace(/[\s\-\(\)]/g, '');
        if (!phoneRegex.test(cleanPhone)) return 'Please enter a valid phone number';
        return '';

      case 'date':
        if (!value) return 'Date is required';
        const selectedDate = new Date(value);
        const todayDate = new Date(today);
        const maxDateObj = new Date(maxDateString);
        if (selectedDate < todayDate) return 'Please select a future date';
        if (selectedDate > maxDateObj) return 'Reservations can only be made up to 3 months in advance';
        return '';

      case 'time':
        if (!value) return 'Time is required';
        if (!timeSlots.includes(value)) return 'Please select a valid time slot';
        return '';

      case 'guests':
        const guestCount = parseInt(value);
        if (guestCount < 1) return 'At least 1 guest is required';
        if (guestCount > 12) return 'Maximum 12 guests allowed';
        return '';

      default:
        return '';
    }
  };

  // Validate all fields
  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      if (['name', 'email', 'phone', 'date', 'time', 'guests'].includes(key)) {
        const error = validateField(key, formData[key]);
        if (error) newErrors[key] = error;
      }
    });
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }

    // Real-time validation for touched fields
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));

    // Validate field on blur
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields
    const formErrors = validateForm();
    setErrors(formErrors);
    setTouched(Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {}));

    // If there are errors, don't submit
    if (Object.keys(formErrors).length > 0) {
      // Focus on first error field
      const firstErrorField = Object.keys(formErrors)[0];
      const errorElement = document.querySelector(`[name="${firstErrorField}"]`);
      if (errorElement) {
        errorElement.focus();
      }
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Reservation submitted:', formData);
      setIsSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          guests: 2,
          specialRequests: '',
          occasion: '',
          contactPreference: 'email'
        });
        setIsSuccess(false);
        setTouched({});
        setErrors({});
      }, 3000);

    } catch (error) {
      console.error('Submission error:', error);
      alert('There was an error submitting your reservation. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFieldClass = (fieldName) => {
    let classes = '';
    if (errors[fieldName]) classes += ' error';
    if (touched[fieldName] && !errors[fieldName] && formData[fieldName]) classes += ' success';
    return classes;
  };

  if (isSuccess) {
    return (
      <div className="reservation-form success-state">
        <h2>🎉 Reservation Confirmed!</h2>
        <div className="success-content">
          <p>Thank you, <strong>{formData.name}</strong>!</p>
          <p>Your table for <strong>{formData.guests} guests</strong> has been reserved for:</p>
          <div className="reservation-details">
            <p><strong>Date:</strong> {new Date(formData.date).toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</p>
            <p><strong>Time:</strong> {formData.time}</p>
          </div>
          <p>A confirmation will be sent to <strong>{formData.email}</strong></p>
          <small>You can close this page or make another reservation.</small>
        </div>
      </div>
    );
  }

  return (
    <form className="reservation-form" onSubmit={handleSubmit} noValidate>
      <h2>Reserve Your Table</h2>
      
      {/* Personal Information Section */}
      <div className="form-section">
        <h3 className="form-section-title">Personal Information</h3>
        
        <div className="form-group">
          <label className="required">Full Name</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange}
            onBlur={handleBlur}
            className={getFieldClass('name')}
            placeholder="Enter your full name"
            required 
          />
          {errors.name && <div className="error-message">{errors.name}</div>}
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label className="required">Email Address</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange}
              onBlur={handleBlur}
              className={getFieldClass('email')}
              placeholder="your.email@example.com"
              required 
            />
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>
          
          <div className="form-group">
            <label className="required">Phone Number</label>
            <input 
              type="tel" 
              name="phone" 
              value={formData.phone} 
              onChange={handleChange}
              onBlur={handleBlur}
              className={getFieldClass('phone')}
              placeholder="+1 (555) 123-4567"
              required 
            />
            {errors.phone && <div className="error-message">{errors.phone}</div>}
          </div>
        </div>

        <div className="form-group">
          <label>Preferred Contact Method</label>
          <select 
            name="contactPreference" 
            value={formData.contactPreference} 
            onChange={handleChange}
          >
            <option value="email">Email</option>
            <option value="phone">Phone</option>
            <option value="text">Text Message</option>
          </select>
        </div>
      </div>

      {/* Reservation Details Section */}
      <div className="form-section">
        <h3 className="form-section-title">Reservation Details</h3>
        
        <div className="form-row">
          <div className="form-group">
            <label className="required">Date</label>
            <input 
              type="date" 
              name="date" 
              value={formData.date} 
              onChange={handleChange}
              onBlur={handleBlur}
              className={getFieldClass('date')}
              min={today}
              max={maxDateString}
              required 
            />
            {errors.date && <div className="error-message">{errors.date}</div>}
          </div>
          
          <div className="form-group">
            <label className="required">Time</label>
            <select 
              name="time" 
              value={formData.time} 
              onChange={handleChange}
              onBlur={handleBlur}
              className={getFieldClass('time')}
              required
            >
              <option value="">Select a time</option>
              <optgroup label="Lunch Service">
                {timeSlots.filter(time => time < '15:00').map(time => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </optgroup>
              <optgroup label="Dinner Service">
                {timeSlots.filter(time => time >= '17:00').map(time => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </optgroup>
            </select>
            {errors.time && <div className="error-message">{errors.time}</div>}
          </div>
          
          <div className="form-group">
            <label className="required">Number of Guests</label>
            <select 
              name="guests" 
              value={formData.guests} 
              onChange={handleChange}
              onBlur={handleBlur}
              className={getFieldClass('guests')}
            >
              {Array.from({length: 12}, (_, i) => i + 1).map(num => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'Guest' : 'Guests'}
                </option>
              ))}
            </select>
            {errors.guests && <div className="error-message">{errors.guests}</div>}
          </div>
        </div>

        <div className="form-group">
          <label>Special Occasion</label>
          <select 
            name="occasion" 
            value={formData.occasion} 
            onChange={handleChange}
          >
            {occasions.map(occasion => (
              <option key={occasion.value} value={occasion.value}>
                {occasion.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="form-section">
        <h3 className="form-section-title">Additional Information</h3>
        
        <div className="form-group">
          <label>Special Requests or Dietary Requirements</label>
          <textarea 
            name="specialRequests" 
            value={formData.specialRequests} 
            onChange={handleChange}
            placeholder="Please let us know about any allergies, dietary restrictions, seating preferences, or special requests..."
            maxLength="500"
          />
          <small className="char-count">
            {formData.specialRequests.length}/500 characters
          </small>
        </div>
      </div>
      
      <button 
        type="submit" 
        className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Processing Reservation...' : 'Reserve Table'}
      </button>

      <div className="form-footer">
        <small>
          By submitting this form, you agree to our reservation policy. 
          Reservations can be cancelled up to 2 hours before your scheduled time.
        </small>
      </div>
    </form>
  );
};

export default ReservationForm;