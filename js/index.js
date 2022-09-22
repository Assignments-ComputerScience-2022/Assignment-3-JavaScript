Vue.createApp({
    data() {
      return {
       result: null,
       word: null,
       times: null,
      };
    },
  
    methods: {
        repeatNumberOfTimes(word, times) {
            
            if (word && times) {
                if(times > 0) {
                this.result = word.repeat(times);
                } 
                else {
                    this.result = "Must be non-negative number: " + this.times;
                }
            } 
            else this.result = "something went wrong";
        }
     
    },
  }).mount("#app");