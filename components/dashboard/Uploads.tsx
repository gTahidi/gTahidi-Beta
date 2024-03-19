const UploadsComponent = () => {
    const uploads = [
      { title: "Submission NLP Programming", date: "04 Jan, 09:20AM" },
      { title: "Submission Mobile Programming", date: "01 Jan, 18:20PM" },
    ];
  
    return (
      <div className="bg-white p-6 w-1/2 rounded-xl shadow-md">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Your Uploads</h3>
        <div className="space-y-4">
          {uploads.map((upload, index) => (
            <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-gray-100">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-600 text-white rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l-2 2m4 0l2-2v13m6 0h.01" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">{upload.title}</p>
                  <p className="text-sm text-gray-500">{upload.date}</p>
                </div>
              </div>
              <span className="text-xs font-semibold text-blue-600 bg-blue-100 py-1 px-3 rounded-full">Submitted</span>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default UploadsComponent;
  