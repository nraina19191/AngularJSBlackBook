using System;
using System.Collections;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace ConsoleApplication1
{
    class Learn
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Start");
            Learn o = new Learn();
            var list = Enumerable.Range(1, 100000000);
            int steps = 0;
            int idx = o.BinarySearch(list.ToArray(), 265, ref steps);
            Console.ReadLine();
        } 

        public int BinarySearch(int[] list, int target, ref int steps) {
            int first = 0;
            int last = list.Length - 1;
            while (first <= last) {
                steps = steps + 1;
                int midpoint = (int)Math.Ceiling((first + last) / 2d);
                if (list[midpoint] == target)
                    return midpoint;
                else if (list[midpoint] < target)
                    first = midpoint + 1;
                else if (list[midpoint] > target)
                    last = midpoint - 1;
            }

            return -1;
        }
    }
}