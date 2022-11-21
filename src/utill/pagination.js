export const paginatedResults = (userList ,params) => {
      const page = parseInt(params && params.page || 1); 
      const limit = parseInt(params && params.limit || 7);
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
   
      const results = {};
      if (endIndex < userList.length) {
        results.next = {
          page: page + 1,
          limit: limit
        };
      }
   
      if (startIndex > 0) {
        results.previous = {
          page: page - 1,
          limit: limit
        };
      }
   
    return results.results = userList.slice(startIndex, endIndex);
   
}