-- Backend-ready schema for a public construction lead-generation website.
-- Works as a planning base for PostgreSQL/MySQL with minor type adjustments.

CREATE TABLE leads (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(120) NOT NULL,
  mobile VARCHAR(30) NOT NULL,
  email VARCHAR(160),
  city VARCHAR(120),
  plot_size VARCHAR(80),
  floors VARCHAR(60),
  budget VARCHAR(80),
  requirement TEXT,
  source VARCHAR(120),
  status VARCHAR(40) DEFAULT 'new',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE services (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  slug VARCHAR(120) UNIQUE NOT NULL,
  title VARCHAR(160) NOT NULL,
  subtitle VARCHAR(220),
  description TEXT,
  category VARCHAR(120),
  image_url TEXT,
  is_active BOOLEAN DEFAULT TRUE,
  sort_order INT DEFAULT 0
);

CREATE TABLE construction_packages (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  slug VARCHAR(120) UNIQUE NOT NULL,
  name VARCHAR(120) NOT NULL,
  price_per_sqft DECIMAL(10, 2) NOT NULL,
  best_for VARCHAR(220),
  description TEXT,
  cement_brand VARCHAR(220),
  steel_brand VARCHAR(220),
  wiring_brand VARCHAR(220),
  plumbing_brand VARCHAR(220),
  flooring VARCHAR(220),
  paint_brand VARCHAR(220),
  is_active BOOLEAN DEFAULT TRUE
);

CREATE TABLE projects (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title VARCHAR(180) NOT NULL,
  category VARCHAR(80),
  status VARCHAR(40),
  location VARCHAR(160),
  plot_size VARCHAR(80),
  floors VARCHAR(80),
  timeline VARCHAR(80),
  budget_range VARCHAR(120),
  progress_percent INT DEFAULT 0,
  description TEXT,
  cover_image_url TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE project_updates (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  project_id BIGINT NOT NULL REFERENCES projects(id),
  update_title VARCHAR(180),
  update_note TEXT,
  progress_percent INT,
  image_url TEXT,
  update_week VARCHAR(80),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE testimonials (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  client_name VARCHAR(120) NOT NULL,
  location VARCHAR(120),
  project_type VARCHAR(160),
  rating INT DEFAULT 5,
  quote TEXT NOT NULL,
  image_url TEXT,
  is_verified BOOLEAN DEFAULT FALSE,
  is_active BOOLEAN DEFAULT TRUE
);

CREATE TABLE gallery_items (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title VARCHAR(180) NOT NULL,
  media_type VARCHAR(80),
  image_url TEXT,
  video_url TEXT,
  project_id BIGINT REFERENCES projects(id),
  sort_order INT DEFAULT 0,
  is_active BOOLEAN DEFAULT TRUE
);

CREATE TABLE blog_posts (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  slug VARCHAR(160) UNIQUE NOT NULL,
  title VARCHAR(220) NOT NULL,
  category VARCHAR(120),
  excerpt TEXT,
  content TEXT,
  cover_image_url TEXT,
  meta_title VARCHAR(220),
  meta_description VARCHAR(320),
  published_at TIMESTAMP,
  is_published BOOLEAN DEFAULT FALSE
);

CREATE TABLE faqs (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  question VARCHAR(260) NOT NULL,
  answer TEXT NOT NULL,
  category VARCHAR(120),
  sort_order INT DEFAULT 0,
  is_active BOOLEAN DEFAULT TRUE
);

CREATE TABLE vendors (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(180) NOT NULL,
  category VARCHAR(120),
  contact_person VARCHAR(120),
  mobile VARCHAR(30),
  email VARCHAR(160),
  city VARCHAR(120),
  notes TEXT,
  status VARCHAR(40) DEFAULT 'new',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE job_applications (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(120) NOT NULL,
  mobile VARCHAR(30) NOT NULL,
  role_applied VARCHAR(120),
  experience VARCHAR(80),
  city VARCHAR(120),
  message TEXT,
  resume_url TEXT,
  status VARCHAR(40) DEFAULT 'new',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
