#include <stdio.h>
#include <stdlib.h>

void hello(unsigned char *buf, int size)
{
  printf("%d", buf[0]);  
  printf("hello!\n");
}

