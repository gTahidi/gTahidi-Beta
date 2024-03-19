const ProgressCard = () => {
    const courses = [
      { code: "UI", title: "Part Typography", subtitle: "User Interface", color: "yellow", progress: 60 },
      { code: "DS", title: "Part Data Structure", subtitle: "Computer Science", color: "green", progress: 80 },
      { code: "AS", title: "Part Architecture", subtitle: "Engineering", color: "red", progress: 40 },
    ];
  
    return (
      <div className="p-6 bg-white rounded-lg w-1/2 shadow-md">
        <h3 className="text-lg font-semibold text-gray-700 mb-4 flex justify-between items-center">
          Progress Learning
        </h3>
        {courses.map((course, index) => (
          <div key={index} className="mb-4 last:mb-0">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center space-x-3">
                <span className="text-lg bg-gray-300 p-2 rounded  font-semibold">{course.code}</span>
                <div>
                  <p className="font-medium">{course.title}</p>
                  <p className="text-sm text-gray-500">{course.subtitle}</p>
                </div>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div className={`bg-${course.color}-400 h-2.5 rounded-full`} style={{ width: `${course.progress}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default ProgressCard;
  