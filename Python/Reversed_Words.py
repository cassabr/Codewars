'''
Complete the solution so that it reverses all of the words within the string passed in.

Example:

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

'''

def reverseWords(s):
    new_arr = []
    for word in s.split():
        new_arr.append(word)
    new_arr.reverse()   
    return ' '.join(new_arr)
