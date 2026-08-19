import React, { useState, useEffect } from 'react';
import { 
  ViewMode, 
  AppTheme,
  ConsumerLead, 
  GuestPostSubmission, 
  MembershipInquiry, 
  CityPartnershipApplication, 
  MarketingInquiry, 
  CityData, 
  DirectoryBusiness, 
  Article,
  Testimonial 
} from './types';
import { 
  INITIAL_CITIES, 
  INITIAL_BUSINESSES, 
  INITIAL_ARTICLES, 
  INSULATION_SERVICES,
  INITIAL_TESTIMONIALS 
} from './data/initialData';

import { Header } from './components/Header';
import { Breadcrumbs } from './components/Breadcrumbs';
import { Footer } from './components/Footer';
import { ToastNotification, ToastMessage } from './components/ToastNotification';
import { GetHelpModal } from './components/GetHelpModal';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { HomeView } from './components/HomeView';
import { ServicesHubView } from './components/ServicesHubView';
import { ServiceDetailView } from './components/ServiceDetailView';
import { CanadaDirectoryView } from './components/CanadaDirectoryView';
import { ProvinceDetailView } from './components/ProvinceDetailView';
import { CityDetailView } from './components/CityDetailView';
import { CityPartnershipView } from './components/CityPartnershipView';
import { GuestPostView } from './components/GuestPostView';
import { MembershipView } from './components/MembershipView';
import { MarketWithUsView } from './components/MarketWithUsView';
import { BusinessDirectoryView } from './components/BusinessDirectoryView';
import { ResourcesView } from './components/ResourcesView';
import { ArticleDetailView } from './components/ArticleDetailView';
import { AboutView } from './components/AboutView';
import { ContactView } from './components/ContactView';
import { AdminView } from './components/AdminView';

// New High-Priority Tools & Hubs
import { InsulationComparisonView } from './components/InsulationComparisonView';
import { ProjectEstimatorView } from './components/ProjectEstimatorView';
import { InsulationAdvisorView } from './components/InsulationAdvisorView';
import { CostGuideView } from './components/CostGuideView';
import { ContractorsDirectoryView } from './components/ContractorsDirectoryView';
import { CanadaProvincesHubView } from './components/CanadaProvincesHubView';
import { ResourcesHubView } from './components/ResourcesHubView';

export function App() {
  const [currentView, setCurrentView] = useState<ViewMode>('home');
  const [currentParamId, setCurrentParamId] = useState<string | undefined>(undefined);
  const [isGetHelpOpen, setIsGetHelpOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Theme Management (Deep Navy vs Light Professional)
  const [theme, setTheme] = useState<AppTheme>(() => {
    const saved = localStorage.getItem('spray_insulations_theme') as AppTheme | null;
    return saved === 'light-professional' ? 'light-professional' : 'deep-navy';
  });

  // Synchronize active theme with document element and localStorage
  useEffect(() => {
    localStorage.setItem('spray_insulations_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'light-professional') {
      document.documentElement.classList.add('light-professional');
      document.documentElement.classList.remove('deep-navy');
    } else {
      document.documentElement.classList.add('deep-navy');
      document.documentElement.classList.remove('light-professional');
    }
  }, [theme]);

  const handleToggleTheme = () => {
    const nextTheme: AppTheme = theme === 'deep-navy' ? 'light-professional' : 'deep-navy';
    setTheme(nextTheme);
    addToast(
      'info',
      nextTheme === 'light-professional' ? 'Light Professional Mode Activated' : 'Deep Navy Mode Activated',
      nextTheme === 'light-professional'
        ? 'High-contrast light interface enabled for daylight readability.'
        : 'Deep Navy contrast palette restored.'
    );
  };

  // Toast management
  const addToast = (type: 'success' | 'info' | 'warning', title: string, message: string) => {
    const newToast: ToastMessage = {
      id: `toast-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      type,
      title,
      message,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setToasts(prev => [newToast, ...prev.slice(0, 3)]); // Keep max 4 active toasts
  };

  const handleDismissToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // Persistent App State with LocalStorage
  const [cities, setCities] = useState<CityData[]>(() => {
    const saved = localStorage.getItem('spray_insulations_cities');
    return saved ? JSON.parse(saved) : INITIAL_CITIES;
  });

  const [businesses, setBusinesses] = useState<DirectoryBusiness[]>(() => {
    const saved = localStorage.getItem('spray_insulations_businesses');
    return saved ? JSON.parse(saved) : INITIAL_BUSINESSES;
  });

  const [articles, setArticles] = useState<Article[]>(() => {
    const saved = localStorage.getItem('spray_insulations_articles');
    return saved ? JSON.parse(saved) : INITIAL_ARTICLES;
  });

  const [leads, setLeads] = useState<ConsumerLead[]>(() => {
    const saved = localStorage.getItem('spray_insulations_leads');
    return saved ? JSON.parse(saved) : [
      {
        id: 'lead-init-1',
        date: '2025-02-14',
        fullName: 'David Tremblay',
        email: 'david.tremblay@montrealbuild.ca',
        phone: '514-555-0192',
        province: 'QC',
        city: 'Montreal',
        projectType: 'Commercial Retrofit',
        serviceNeeded: 'Spray Foam Insulation',
        timeline: 'Within 1-3 Months',
        projectDetails: 'Converting 4,000 sq ft industrial masonry warehouse into conditioned commercial offices. Need 2lb closed cell polyurethane specs.',
        status: 'New'
      }
    ];
  });

  const [guestPosts, setGuestPosts] = useState<GuestPostSubmission[]>(() => {
    const saved = localStorage.getItem('spray_insulations_guestposts');
    return saved ? JSON.parse(saved) : [];
  });

  const [memberships, setMemberships] = useState<MembershipInquiry[]>(() => {
    const saved = localStorage.getItem('spray_insulations_memberships');
    return saved ? JSON.parse(saved) : [];
  });

  const [cityPartnerships, setCityPartnerships] = useState<CityPartnershipApplication[]>(() => {
    const saved = localStorage.getItem('spray_insulations_city_apps');
    return saved ? JSON.parse(saved) : [];
  });

  const [marketingInquiries, setMarketingInquiries] = useState<MarketingInquiry[]>(() => {
    const saved = localStorage.getItem('spray_insulations_marketing');
    return saved ? JSON.parse(saved) : [];
  });

  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => {
    const saved = localStorage.getItem('spray_insulations_testimonials');
    return saved ? JSON.parse(saved) : INITIAL_TESTIMONIALS;
  });

  // Sync state to localStorage
  useEffect(() => {
    localStorage.setItem('spray_insulations_cities', JSON.stringify(cities));
  }, [cities]);

  useEffect(() => {
    localStorage.setItem('spray_insulations_businesses', JSON.stringify(businesses));
  }, [businesses]);

  useEffect(() => {
    localStorage.setItem('spray_insulations_leads', JSON.stringify(leads));
  }, [leads]);

  useEffect(() => {
    localStorage.setItem('spray_insulations_guestposts', JSON.stringify(guestPosts));
  }, [guestPosts]);

  useEffect(() => {
    localStorage.setItem('spray_insulations_memberships', JSON.stringify(memberships));
  }, [memberships]);

  useEffect(() => {
    localStorage.setItem('spray_insulations_city_apps', JSON.stringify(cityPartnerships));
  }, [cityPartnerships]);

  useEffect(() => {
    localStorage.setItem('spray_insulations_marketing', JSON.stringify(marketingInquiries));
  }, [marketingInquiries]);

  useEffect(() => {
    localStorage.setItem('spray_insulations_testimonials', JSON.stringify(testimonials));
  }, [testimonials]);

  // Navigation handler
  const handleNavigate = (view: ViewMode, paramId?: string) => {
    setCurrentView(view);
    setCurrentParamId(paramId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // State handlers
  const handleSaveLead = (newLead: ConsumerLead) => {
    setLeads(prev => [newLead, ...prev]);
    addToast(
      'success',
      'Inquiry Dispatched Successfully!',
      `Thank you ${newLead.fullName}. Your ${newLead.serviceNeeded || newLead.serviceCategory || 'insulation'} project in ${newLead.city ? `${newLead.city}, ` : ''}${newLead.province} has been logged and dispatched to build@buildershuas.com.`
    );
  };

  const handleSaveGuestPost = (newPost: GuestPostSubmission) => {
    setGuestPosts(prev => [newPost, ...prev]);
    addToast(
      'success',
      'Guest Post Proposal Submitted ($10 CAD)',
      `"${newPost.articleTitle}" by ${newPost.authorName} has been queued for editorial review under Canadian building science standards.`
    );
  };

  const handleSaveMembership = (newMem: MembershipInquiry) => {
    setMemberships(prev => [newMem, ...prev]);
    // Auto-add to directory
    const newBiz: DirectoryBusiness = {
      id: `biz-${Date.now()}`,
      name: newMem.businessName,
      category: (newMem.industry as any) || 'Insulation Contractor',
      provinceCode: newMem.province,
      city: newMem.city,
      description: `Verified Canadian ${newMem.industry} member serving ${newMem.city}, ${newMem.province} and regional markets.`,
      website: newMem.website || undefined,
      isVerified: true,
      isMember: true,
      servesResidential: true,
      servesCommercial: true,
      servesIndustrial: false,
      joinedYear: String(new Date().getFullYear())
    };
    setBusinesses(prev => [newBiz, ...prev]);
    addToast(
      'success',
      'Industry Membership Registered ($10/Year)',
      `Welcome ${newMem.businessName}! Your business has been enrolled in the Canada-wide directory with official member standing.`
    );
  };

  const handleSaveCityPartnership = (newApp: CityPartnershipApplication) => {
    setCityPartnerships(prev => [newApp, ...prev]);
    // Update city status to PENDING
    setCities(prev => prev.map(c => 
      c.name.toLowerCase() === newApp.city.toLowerCase() ? { ...c, partnershipStatus: 'PENDING' } : c
    ));
    addToast(
      'success',
      'Exclusive City Partnership Application Received',
      `Application for ${newApp.city}, ${newApp.province} ($${newApp.calculatedAnnualFee.toLocaleString()} CAD/yr) is under exclusivity review.`
    );
  };

  const handleSaveMarketingInquiry = (newInq: MarketingInquiry) => {
    setMarketingInquiries(prev => [newInq, ...prev]);
    addToast(
      'info',
      'Marketing Inquiry Received',
      `Thank you ${newInq.contactName}. The Industry Army Marketing team for SprayInsulations.ca will be in touch shortly.`
    );
  };

  const handleSaveTestimonial = (newTestimonial: Testimonial) => {
    setTestimonials(prev => [newTestimonial, ...prev]);
    addToast(
      'success',
      'Verified Review Published',
      `Thank you ${newTestimonial.authorName}! Your 5-star review has been published with live Schema.org Review structured data.`
    );
  };

  const handleToggleTestimonialPublished = (id: string) => {
    setTestimonials(prev => prev.map(t => t.id === id ? { ...t, published: !t.published } : t));
    const target = testimonials.find(t => t.id === id);
    addToast(
      'info',
      'Testimonial Status Updated',
      `Review from ${target?.authorName || 'user'} is now ${target?.published ? 'hidden' : 'published'}.`
    );
  };

  const handleDeleteTestimonial = (id: string) => {
    setTestimonials(prev => prev.filter(t => t.id !== id));
    addToast(
      'warning',
      'Testimonial Removed',
      'The selected project review has been deleted.'
    );
  };

  const handleUpdateCityStatus = (cityId: string, status: 'AVAILABLE' | 'PENDING' | 'PARTNERED') => {
    setCities(prev => prev.map(c => c.id === cityId ? { ...c, partnershipStatus: status } : c));
    const targetCity = cities.find(c => c.id === cityId);
    addToast(
      'info',
      'City Territory Status Updated',
      `${targetCity ? targetCity.name : 'City'} exclusivity status updated to ${status}.`
    );
  };

  const handleClearData = () => {
    localStorage.clear();
    setCities(INITIAL_CITIES);
    setBusinesses(INITIAL_BUSINESSES);
    setArticles(INITIAL_ARTICLES);
    setTestimonials(INITIAL_TESTIMONIALS);
    setLeads([]);
    setGuestPosts([]);
    setMemberships([]);
    setCityPartnerships([]);
    setMarketingInquiries([]);
    addToast(
      'warning',
      'Platform Reset to Seed Data',
      'All local leads, applications, and custom registrations have been cleared.'
    );
  };

  // Render view
  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return (
          <HomeView
            onNavigate={handleNavigate}
            onOpenGetHelp={() => setIsGetHelpOpen(true)}
            testimonials={testimonials}
            onAddTestimonial={handleSaveTestimonial}
            cities={cities}
            articles={articles}
          />
        );

      case 'services':
        return (
          <ServicesHubView
            onNavigate={handleNavigate}
            onOpenGetHelp={() => setIsGetHelpOpen(true)}
          />
        );

      case 'service-detail':
        return (
          <ServiceDetailView
            serviceSlug={currentParamId || 'spray-foam'}
            testimonials={testimonials}
            onAddTestimonial={handleSaveTestimonial}
            onNavigate={handleNavigate}
            onOpenGetHelp={() => setIsGetHelpOpen(true)}
          />
        );

      case 'compare':
        return (
          <InsulationComparisonView
            onNavigate={handleNavigate}
            onOpenGetHelp={() => setIsGetHelpOpen(true)}
          />
        );

      case 'estimator':
        return (
          <ProjectEstimatorView
            onNavigate={handleNavigate}
            onSubmitLead={handleSaveLead}
            onOpenGetHelp={() => setIsGetHelpOpen(true)}
          />
        );

      case 'advisor':
        return (
          <InsulationAdvisorView
            onNavigate={handleNavigate}
            onOpenGetHelp={() => setIsGetHelpOpen(true)}
          />
        );

      case 'cost-guide':
        return (
          <CostGuideView
            onNavigate={handleNavigate}
            onOpenGetHelp={() => setIsGetHelpOpen(true)}
          />
        );

      case 'contractors':
        return (
          <ContractorsDirectoryView
            onNavigate={handleNavigate}
            onOpenGetHelp={() => setIsGetHelpOpen(true)}
          />
        );

      case 'provinces-hub':
        return (
          <CanadaProvincesHubView
            onNavigate={handleNavigate}
            onOpenGetHelp={() => setIsGetHelpOpen(true)}
          />
        );

      case 'canada':
        return (
          <CanadaDirectoryView
            onNavigate={handleNavigate}
            cities={cities}
          />
        );

      case 'province-detail':
        return (
          <ProvinceDetailView
            provinceCode={currentParamId || 'ON'}
            onNavigate={handleNavigate}
            cities={cities}
            onOpenGetHelp={() => setIsGetHelpOpen(true)}
          />
        );

      case 'city-detail':
        return (
          <CityDetailView
            citySlug={currentParamId || 'toronto'}
            onNavigate={handleNavigate}
            cities={cities}
            directoryBusinesses={businesses}
            onOpenGetHelp={() => setIsGetHelpOpen(true)}
          />
        );

      case 'city-partnerships':
        return (
          <CityPartnershipView
            cities={cities}
            onSaveApplication={handleSaveCityPartnership}
            onNavigate={handleNavigate}
          />
        );

      case 'guest-post':
      case 'guest-posts':
        return (
          <GuestPostView
            onSaveSubmission={handleSaveGuestPost}
            onNavigate={handleNavigate}
          />
        );

      case 'join':
      case 'membership':
        return (
          <MembershipView
            onSaveMembership={handleSaveMembership}
            onNavigate={handleNavigate}
          />
        );

      case 'market-with-us':
        return (
          <MarketWithUsView
            onSaveInquiry={handleSaveMarketingInquiry}
            onNavigate={handleNavigate}
          />
        );

      case 'directory':
        return (
          <BusinessDirectoryView
            businesses={businesses}
            onNavigate={handleNavigate}
          />
        );

      case 'resources-hub':
        return (
          <ResourcesHubView
            onNavigate={handleNavigate}
            onOpenGetHelp={() => setIsGetHelpOpen(true)}
          />
        );

      case 'resources':
        return (
          <ResourcesView
            articles={articles}
            onNavigate={handleNavigate}
          />
        );

      case 'article-detail':
        return (
          <ArticleDetailView
            articleSlug={currentParamId}
            articles={articles}
            onNavigate={handleNavigate}
            onOpenGetHelp={() => setIsGetHelpOpen(true)}
          />
        );

      case 'about':
        return (
          <AboutView
            onNavigate={handleNavigate}
            onOpenGetHelp={() => setIsGetHelpOpen(true)}
          />
        );

      case 'contact':
        return (
          <ContactView
            onSaveLead={handleSaveLead}
            onNavigate={handleNavigate}
          />
        );

      case 'admin':
        return (
          <AdminView
            leads={leads}
            guestPosts={guestPosts}
            memberships={memberships}
            cityPartnerships={cityPartnerships}
            marketingInquiries={marketingInquiries}
            cities={cities}
            testimonials={testimonials}
            onAddTestimonial={handleSaveTestimonial}
            onToggleTestimonialPublished={handleToggleTestimonialPublished}
            onDeleteTestimonial={handleDeleteTestimonial}
            onUpdateCityStatus={handleUpdateCityStatus}
            onClearData={handleClearData}
          />
        );

      default:
        return (
          <HomeView
            onNavigate={handleNavigate}
            onOpenGetHelp={() => setIsGetHelpOpen(true)}
            testimonials={testimonials}
            onAddTestimonial={handleSaveTestimonial}
            cities={cities}
            articles={articles}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-amber-500 selection:text-slate-950">
      
      {/* Sticky Site Header */}
      <Header
        currentView={currentView}
        currentTheme={theme}
        onToggleTheme={handleToggleTheme}
        onNavigate={handleNavigate}
        onOpenGetHelp={() => setIsGetHelpOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Dynamic SEO Breadcrumbs Navigation */}
      <Breadcrumbs
        currentView={currentView}
        currentParamId={currentParamId}
        onNavigate={handleNavigate}
        cities={cities}
        articles={articles}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {renderCurrentView()}
      </main>

      {/* Corporate Division Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenGetHelp={() => setIsGetHelpOpen(true)}
      />

      {/* Global Keyword Search Modal */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
        businesses={businesses}
        articles={articles}
        cities={cities}
      />

      {/* Global Consumer "Get Help" Modal */}
      <GetHelpModal
        isOpen={isGetHelpOpen}
        onClose={() => setIsGetHelpOpen(false)}
        onSubmitLead={handleSaveLead}
      />

      {/* Global Toast Notification System */}
      <ToastNotification
        toasts={toasts}
        onDismiss={handleDismissToast}
      />

    </div>
  );
}

export default App;
