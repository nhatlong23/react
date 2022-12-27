#include <bits/stdc++.h>
using namespace std;

int main()
{
	double a, b, c;
	cin >> a >> b >> c;
	double t = b * b - 4 * a * c;
	if (t < 0)
		cout << "No solution";
	else if (t == 0)
		cout << fixed << setprecision(4) << (-b) / (2 * a);
	else
	{
		double x1 = 1.0 * ((-b + sqrt(t)) / (2 * a));
		double x2 = 1.0 * ((-b - sqrt(t)) / (2 * a));
		if (x1 > x2)
		{
			cout << fixed << setprecision(4) << x2 << endl;
			cout << fixed << setprecision(4) << x1;
		}
		else
		{
			cout << fixed << setprecision(4) << x1 << endl;
			cout << fixed << setprecision(4) << x2;
		}
	}
}
