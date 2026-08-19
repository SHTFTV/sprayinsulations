import React from 'react';
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  User, 
  Share2, 
  ShieldCheck, 
  ArrowRight, 
  BookOpen 
} from 'lucide-react';
import { Article, ViewMode } from '../types';
import { INITIAL_ARTICLES, PRIMARY_CONTACT_EMAIL } from '../data/initialData';
import { generateArticleSchema } from '../utils/faqHelper';

interface ArticleDetailViewProps {
  articleSlug?: string;
  articles: Article[];
  onNavigate: (view: ViewMode, paramId?: string) => void;
  onOpenGetHelp: () => void;
}

export const ArticleDetailView: React.FC<ArticleDetailViewProps> = ({
  articleSlug,
  articles,
  onNavigate,
  onOpenGetHelp
}) => {
  const article = articles.find(a => a.slug === articleSlug) || articles[0];
  const articleSchemaJsonLd = JSON.stringify(generateArticleSchema(article));

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Schema.org TechArticle Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: articleSchemaJsonLd }}
      />
      
      <div>
        <button
          onClick={() => onNavigate('resources')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-amber-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Resources & Guides</span>
        </button>
      </div>

      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-amber-400">
          <span>{article.category}</span>
          <span>•</span>
          <span>{article.readTime}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight leading-tight">
          {article.title}
        </h1>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-b border-slate-800 pb-4 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-slate-200">
              <User className="w-4 h-4 text-amber-400" />
              {article.author}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4 text-slate-400" />
              {article.datePublished}
            </span>
          </div>

          <div className="text-slate-400">
            Canadian Building Science Reference
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-950">
        <img
          src={article.image}
          alt={article.title}
          referrerPolicy="no-referrer"
          className="w-full h-72 sm:h-96 object-cover object-center brightness-95"
        />
      </div>

      {/* Article Content */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-6 text-slate-200 leading-relaxed font-sans">
        <div className="text-base sm:text-lg text-amber-400/90 font-medium italic border-l-2 border-amber-500 pl-4 py-1">
          {article.summary}
        </div>

        <div className="space-y-5 text-sm sm:text-base text-slate-300 leading-relaxed whitespace-pre-line">
          {article.content}
        </div>

        {/* Disclaimer note */}
        <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-400 space-y-1 mt-8">
          <div className="font-semibold text-slate-300 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Building Science & Code Advisory</span>
          </div>
          <p>
            Information provided is for educational and technical guidance purposes. Always verify specific assemblies, thermal barriers, and vapor management strategies with local certified building officials, structural engineers, and qualified contractors.
          </p>
        </div>
      </div>

      {/* CTA Box */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-white font-display">
            Need specialized guidance on your building envelope?
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Connect with verified Canadian contractors or submit project specs.
          </p>
        </div>

        <button
          onClick={onOpenGetHelp}
          className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shrink-0 transition-all"
        >
          REQUEST PROJECT HELP
        </button>
      </div>

    </div>
  );
};
