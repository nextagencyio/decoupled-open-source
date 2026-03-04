import Header from '../components/Header'
import { Mail, MessageSquare, Github, BookOpen } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the NovaCMS community. Find support, report issues, or join the conversation.',
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h1>
            <p className="text-base md:text-lg text-gray-600">
              Have questions about NovaCMS? Join our community or reach out directly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Community Channels</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Github className="w-6 h-6 text-slate-700 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">GitHub</h3>
                    <p className="text-gray-600">Report issues, submit PRs, and star the repo.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MessageSquare className="w-6 h-6 text-slate-700 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Discord</h3>
                    <p className="text-gray-600">Join 2,000+ developers in real-time chat.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-slate-700 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600">hello@novacms.dev</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <BookOpen className="w-6 h-6 text-slate-700 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Documentation</h3>
                    <p className="text-gray-600">Comprehensive guides and API reference.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea id="message" name="message" rows={5} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500" required />
                </div>
                <button type="submit" className="w-full bg-slate-800 text-white py-3 px-4 rounded-md hover:bg-slate-900 transition-colors duration-200 font-medium">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
