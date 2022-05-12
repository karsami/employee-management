using System;
using System.Collections.Generic;
using System.Text;

namespace Model
{
    public class PagingRequest
    {
        /// <summary>
        /// 
        /// </summary>
        public int PageSize { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public int PageIndex { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string Filter { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string Sort { get; set; }
    }
}
