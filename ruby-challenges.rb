# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

# letter_o = 'o'
# # Expected output: ['coffee', 'soda water']
# letter_t = 't'
# # Expected output: ['tea', 'water', 'soda water']

# beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

# def excluding ()
#     if letter_o == 'o'
#     puts ['coffee', 'soda water']
#     elsif letter_t == 't'
#         puts ['tea', 'water', 'soda water']
#     end
# end



p beverages_array.excluding()

# --------------------------------------private method `excluding' called for ["coffee", "tea", "juice", "water", "soda water"]:Array (NoMethodError), so I'm confused even though I'm not getting the expected output its saying 'no method error'.


# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100

p nums_array1.sum
p nums_array2.sum


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'
 class Bike
    def model, wheels, current_speed
        @model = 'trek'
        @wheels = 2
        @current_speed = 0
    end

    def bike_info
        puts("The #{@model} bike has #{@wheels} wheels and is going #{@current_speed}mph")
    end

    


# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

 def pedal_faster
    @current_speed = 10
 end

 def brake
    @


    # ----------------------------------- Extremely confusing, I dont understand how to get that expected output in the examples. Where/how would I incorporate the 'my_bike_.pedal' with the given information and how would I be able to get the different values for each expected output if I've already done one, how would I not interfare with the one I made? Before that when I ran the first part of my code I got this error: 'syntax error, unexpected ';', expecting '='' where would I put these syntax? I tried beside the parameter with both equal and semi colon and still got the same error