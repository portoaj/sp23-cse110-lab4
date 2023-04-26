1.The code will print 3 b/c the for loop gets incremented to 3 after going through the length 3 array.
2.The code will print 150 b/c it's the final discounted price calculated by the loop (0.5 * 300).
3.The code will print 150 b/c it's the last finalPrice calculated by the loop.
4.The code will return a list of discounted prices, in this case [50,100,150]
5.The code will return an error b/c i is now only within the scope of the for loop, not the function overall
6.The code will return an error b/c discountedPrice is only within the scope of the for loop
7.The code will return 150 b/c finalPrice is created within the scope of the function.
8.The code will still return [50,100,150] b/c discounted is still within function scope.
9.The code will throw an error b/c i is only within the scope of the for loop.
10.The code will print 3 b/c that's the length of the input array.
11.The code will return [50,100,150] b/c the function will still run as expected.
12.A. student.name
12.B. student['Grad Year']
12.C. student.greeting()
12.D. student['Favorite Teacher'].name
12.E. student.courseLoad[0]
13.A.'32' b/c the 2 gets converted to a string
13.B.1 b/c the 3 gets converted to a number
13.C.3 b/c null gets converted 0
13.D.'3null' b/c null gets converted to 'null'
13.E.4 b/c true gets converted to 1
13.F.0 b/c false and null are both converted to 0
13.G.'3undefined' b/c undefined gets converted to a string
13.H.NaN b/c 3 gets converted to a number and a number - undefined is NaN
14.A. True b/c '2' is converted to a number and 2>1
14.B. False b/c the value of the string '12' is smaller than the value of the string '2'
14.C. True b/c 2 and '2' are truthy
14.D. False, b/c 2 and '2' are of different types
14.E. False b/c true is converted to 1 and 1 != 2
14.F. True b/c Boolean created with any non 0 value is true and true===true is true
15. == Checks for truthiness and === checks for both truthyness and type equality
17.[2,4,6] b/c each value in the input array is run through the callback which in this case simply doubles its input. Then the array of all these values is output78
19.1 4 3 2