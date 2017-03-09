#include <stdio.h>

int main()
{
	char* str = "이태식";
	char* str2 = "학번은 2011037257 입니다.";

	int input = 0;

	scanf("%d", &input);

	if(input == 1)
	{
		printf("%s", str);
	}
	else if(input == 2)
	{
		printf("%s", str2);
	}

	return 0;
} 