import { useEffect, useState } from 'react';
import { FiMail, FiSearch, FiFilter, FiCalendar, FiUser, FiMessageSquare, FiTrash2, FiArchive } from 'react-icons/fi';
import { getContactMessages } from '../services/firebaseService';
import { Timestamp } from 'firebase/firestore';


const AdminMessages = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [expandedMessage, setExpandedMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const data = await getContactMessages();
        setMessages(data);
      } catch (error) {
        console.error('Error fetching contact messages:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  const filteredMessages = messages.filter(msg => {
    const matchesSearch = 
      msg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      msg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      msg.message.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filter === 'all') return matchesSearch;
    if (filter === 'unread') return matchesSearch && !msg.read;
    if (filter === 'archived') return matchesSearch && msg.archived;
    return matchesSearch;
  });

  const toggleExpand = (id: string) => {
    setExpandedMessage(expandedMessage === id ? null : id);
  };

  const markAsRead = (id: string) => {
    setMessages(messages.map(msg => 
      msg.id === id ? { ...msg, read: true } : msg
    ));
  };

  const archiveMessage = (id: string) => {
    setMessages(messages.map(msg => 
      msg.id === id ? { ...msg, archived: true } : msg
    ));
  };

  const deleteMessage = (id: string) => {
    setMessages(messages.filter(msg => msg.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Header */}
        <header className="mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
                <FiMail className="text-brand" />
                <span className="bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">
                  Contact Messages
                </span>
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Manage all messages from your contact form
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative flex-1 max-w-md">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search messages..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-brand/50"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="relative">
                <select
                  className="appearance-none pl-10 pr-8 py-2.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-brand/50"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                >
                  <option value="all">All Messages</option>
                  <option value="unread">Unread</option>
                  <option value="archived">Archived</option>
                </select>
                <FiFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <div className="w-3 h-3 rounded-full bg-brand"></div>
              <span className="text-sm font-medium">
                {messages.filter(m => !m.read).length} Unread
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <FiMail />
              <span className="text-sm font-medium">
                {messages.length} Total Messages
              </span>
            </div>
          </div>
        </header>

        {/* Messages List */}
        {loading ? (
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div 
                key={i}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden animate-pulse"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="bg-gray-200 dark:bg-gray-700 rounded-full w-12 h-12"></div>
                      <div>
                        <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-32 mb-2"></div>
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-48"></div>
                      </div>
                    </div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                  </div>
                  <div className="flex gap-3 mt-6">
                    <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-lg w-24"></div>
                    <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-lg w-24"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredMessages.length === 0 ? (
          <div className="text-center py-20">
            <div className="inline-block p-6 rounded-full bg-brand/10 dark:bg-brand/20 mb-6">
              <FiMail className="text-4xl text-brand" />
            </div>
            <h3 className="text-2xl font-bold mb-2">No messages found</h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
              {searchTerm ? 
                "No messages match your search. Try a different search term." : 
                filter === 'unread' ? 
                "You have no unread messages!" : 
                "All messages are currently archived."}
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredMessages.map(msg => (
              <div 
                key={msg.id}
                className={`bg-white dark:bg-gray-800 rounded-2xl shadow-md border ${
                  !msg.read ? "border-brand/30 shadow-brand/10" : "border-gray-100 dark:border-gray-700"
                } transition-all duration-300`}
              >
                <div 
                  className="p-6 cursor-pointer"
                  onClick={() => {
                    toggleExpand(msg.id);
                    if (!msg.read) markAsRead(msg.id);
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="bg-gradient-to-r from-brand to-accent w-12 h-12 rounded-full flex items-center justify-center text-white font-bold">
                        {msg.name.charAt(0)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-lg">{msg.name}</h3>
                          {!msg.read && (
                            <span className="px-2 py-0.5 bg-brand text-white text-xs rounded-full">
                              New
                            </span>
                          )}
                          {msg.archived && (
                            <span className="px-2 py-0.5 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                              Archived
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2 mt-1">
                          <FiUser className="text-sm" />
                          <span>{msg.email}</span>
                        </p>
                      </div>
                    </div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-2">
                      <FiCalendar />
                      <span>
  {msg.timestamp?.toDate
    ? msg.timestamp.toDate().toLocaleString()
    : "Unknown"}
</span>
                    </div>
                  </div>
                  
                  <p className={`mt-4 text-gray-700 dark:text-gray-300 ${expandedMessage === msg.id ? '' : 'line-clamp-2'}`}>
                    <FiMessageSquare className="inline mr-2 text-brand" />
                    {msg.message}
                  </p>
                </div>
                
                {expandedMessage === msg.id && (
                  <div className="px-6 pb-6 pt-4 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-750 rounded-b-2xl">
                    <div className="flex flex-wrap gap-3">
                      <button 
                        onClick={() => archiveMessage(msg.id)}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg transition-colors"
                      >
                        <FiArchive />
                        {msg.archived ? "Unarchive" : "Archive"}
                      </button>
                      <button 
                        onClick={() => deleteMessage(msg.id)}
                        className="flex items-center gap-2 px-4 py-2 bg-red-50 hover:bg-red-100 dark:bg-red-900/30 dark:hover:bg-red-900/50 text-red-600 dark:text-red-400 rounded-lg transition-colors"
                      >
                        <FiTrash2 />
                        Delete
                      </button>
                      {!msg.read && (
                        <button 
                          onClick={() => markAsRead(msg.id)}
                          className="flex items-center gap-2 px-4 py-2 bg-brand/10 hover:bg-brand/20 dark:bg-brand/20 dark:hover:bg-brand/30 text-brand dark:text-brand/80 rounded-lg transition-colors"
                        >
                          Mark as Read
                        </button>
                      )}
                      <a 
                        href={`mailto:${msg.email}`} 
                        className="flex items-center gap-2 px-4 py-2 bg-brand hover:bg-brand/90 text-white rounded-lg transition-colors ml-auto"
                      >
                        <FiMail />
                        Reply
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminMessages;