default:
	gcc test.c -fPIC -shared -o libtest.so
cpp:
	gcc testcpp.cpp -fPIC -shared -o libtestcpp.so
