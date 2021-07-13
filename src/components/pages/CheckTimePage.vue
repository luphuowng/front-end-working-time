<template>
  <div class="body">
    <h1>Time Work Checking</h1>
    <div class= "form">
        <form action="/action_page.php">
            <label>Enter Your Work Today</label>
            <b-form-input class="picker" v-model="text" placeholder="Enter your work"></b-form-input>
            <b-form-group
            v-slot="{ ariaDescribedby }">
                <b-form-radio-group
                    v-model="state"
                    :aria-describedby="ariaDescribedby"
                    aria-controls="ex-disabled-readonly">
                    <label>Choose Date</label>
                </b-form-radio-group>
            </b-form-group>
            
            <b-form-datepicker
            class="picker"
            :disabled="disabled"
            :readonly="readonly"
            ></b-form-datepicker>

            <label for="example-input">Choose a time</label>
            <b-form-timepicker class="picker" v-model="value" locale="en"></b-form-timepicker>
            
            <label for="example-input">Note</label><br>
            <textarea class="picker" v-model="message" placeholder="Add your note"></textarea>
            <b-form-radio-group
                v-model="state"
                :aria-describedby="ariaDescribedby"
                aria-controls="ex-disabled-readonly">
                <b-form-radio value="Check_in">Check_in</b-form-radio>
                <b-form-radio value="Check_out">Check_out</b-form-radio>    
            </b-form-radio-group>
            <button class="btn">Check In Your Time</button>
            <button class="btn">Check Out Your Time</button>
        </form>
    </div>
  
</div>  
</template>

<script>
export default{
  name: "CheckTimePage",
    props: {
      
    },
 
    methods: {
      onContext(ctx) {
        // The date formatted in the locale, or the `label-no-date-selected` string
        this.formatted = ctx.selectedFormatted
        // The following will be an empty string until a valid date is entered
        this.selected = ctx.selectedYMD
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .body{
    
    padding: 10px;

    float: left;

  }
  h1 {
    
    background-clip: border-box;
    background: green;
    color: white;
    text-align: left;
    font-family: Tahoma, Verdana, sans-serif;
    font-size: 35px;
    padding-bottom: 5px;
    
    width: 100%;
  }
  .picker  {
      width: 100%;
      padding: 12px 20px;
      margin: 8px 0;
      display: inline-block;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
    }
  .form {
    width: 100%;
    border-radius: 5px;
    background-color: #f2f2f2;
    padding :50px;
  }
  .btn {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn:hover {
  background-color: #3e8e41;
}
</style>
