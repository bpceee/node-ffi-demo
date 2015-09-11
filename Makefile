default:
	gcc -c -fPIC -o test.o test.c && gcc -shared -o libtest.so test.o
