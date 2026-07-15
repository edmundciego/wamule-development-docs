import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  operationsSidebar: [
    'welcome/index',
    {type: 'category', label: 'Getting Started', items: [
      'getting-started/signing-in', 'getting-started/navigation', 'getting-started/roles',
      'getting-started/first-day-checklist', 'getting-started/safe-data', 'getting-started/records-statuses-history',
    ]},
    {type: 'category', label: 'Daily Operations', items: [
      'daily-operations/start-of-day', 'daily-operations/dashboard-daily-brief', 'daily-operations/new-work-and-follow-up',
      'daily-operations/reservations-payments-collections', 'daily-operations/post-sales-end-of-day', 'daily-operations/weekly-review',
    ]},
    {type: 'category', label: 'Sales & Buyer Journey', items: [
      'sales-buyer-journey/overview', 'sales-buyer-journey/inquiry-to-lead', 'sales-buyer-journey/lead-qualification',
      'sales-buyer-journey/site-visit', 'sales-buyer-journey/reservation-deposit', 'sales-buyer-journey/application-to-contract',
    ]},
    {type: 'category', label: 'Feature Guides', items: [
      'feature-guides/dashboard', 'feature-guides/operational-attention', 'feature-guides/daily-brief', 'feature-guides/email-center',
      'feature-guides/leads', 'feature-guides/lead-activities', 'feature-guides/follow-up-tasks', 'feature-guides/site-visits',
      'feature-guides/lots', 'feature-guides/reservations', 'feature-guides/deposit-readiness', 'feature-guides/applications',
      'feature-guides/possible-duplicate-indicators', 'feature-guides/customers', 'feature-guides/customer-detail', 'feature-guides/contracts',
      'feature-guides/payments', 'feature-guides/receipts', 'feature-guides/payment-proof', 'feature-guides/collections',
      'feature-guides/payment-requests', 'feature-guides/statements', 'feature-guides/reports', 'feature-guides/post-sales-checklists',
      'feature-guides/post-sales-tasks', 'feature-guides/audit-trail', 'feature-guides/settings', 'feature-guides/users-and-roles',
      'feature-guides/developer-feedback',
    ]},
    {type: 'category', label: 'Financial Operations', items: [
      'financial-operations/responsibilities-and-recording', 'financial-operations/standards-and-exceptions',
      'financial-operations/collections-and-accountability',
    ]},
    {type: 'category', label: 'Administration', items: [
      'administration/company-and-configuration', 'administration/privileged-controls',
    ]},
    {type: 'category', label: 'Troubleshooting & Support', items: [
      'troubleshooting-support/common-issues', 'troubleshooting-support/developer-feedback',
    ]},
    {type: 'category', label: 'Launch & Training', items: [
      'launch-training/readiness-checklists', 'launch-training/ownership-and-release-notes',
    ]},
    {type: 'category', label: 'Standard Operating Procedures', items: [
      'sops/public-inquiry-to-lead', 'sops/lead-qualification', 'sops/lead-to-site-visit', 'sops/lead-to-reservation',
      'sops/reservation-deposit-review', 'sops/application-review', 'sops/application-decision', 'sops/approved-application-to-customer',
      'sops/contract-preparation', 'sops/payment-recording', 'sops/collections-follow-up', 'sops/post-sales-handoff',
      'sops/data-correction', 'sops/bug-support-reporting',
    ]},
    {type: 'category', label: 'Reference', items: ['reference/glossary', 'reference/feature-status', 'reference/media-plan']},
  ],
};

export default sidebars;
