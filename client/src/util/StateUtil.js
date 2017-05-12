module.exports = class StateUtil {
  static get(obj, path){
      for (var i=0, path=path.split('.'), len=path.length; i<len; i++){
          obj = obj[path[i]];
      };
      return obj;
  }

  static set(obj, path, value) {
    for (var i=0, path=path.split('.'), len=path.length; i<len; i++){
        obj = obj[path[i]];
    };
  }
}
