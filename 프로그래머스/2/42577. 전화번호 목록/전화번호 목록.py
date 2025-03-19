def solution(phone_book):
    phone_set = set(phone_book)
    
    for phone_num in phone_book:
        for i in range(1, len(phone_num)):
            if phone_num[:i] in phone_set:
                return False
    
    return True
    
    