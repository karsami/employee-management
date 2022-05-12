﻿using BLL.Interfaces;
using DAL.Interfaces;
using Model.ServiceResult;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data.SqlTypes;
using System.Linq;
using System.Text;

namespace BLL.Implement
{
    public class BaseBL<T> : IBaseBL<T>
    {
        IBaseDA _baseDA;
        string _tableName = typeof(T).Name;
        ServiceResult _serviceResult;
        public BaseBL(IBaseDA baseDA)
        {
            _baseDA = baseDA;
            _serviceResult = new ServiceResult();
            var customAttributes = typeof(T).GetCustomAttributes(typeof(System.ComponentModel.DataAnnotations.Schema.TableAttribute), false);
            if (customAttributes.Count() > 0)
            {
                _tableName = (customAttributes.First() as System.ComponentModel.DataAnnotations.Schema.TableAttribute).Name;
            }
        }

        public ServiceResult GetAllData()
        {
            var sqlCommand = $"SELECT * FROM {_tableName} ORDER BY ModifiedDate DESC";
            var res = _baseDA.QueryUsingCommandText<T>(sqlCommand);
            if (res.FirstOrDefault() != null)
            {
                _serviceResult = setServiceResult(true, res, Common.Properties.Resources.GetDataSuccess);
            }
            else
            {
                _serviceResult = setServiceResult(false, res, Common.Properties.Resources.GetDataFail);
            }
            return _serviceResult;
        }

        public ServiceResult InsertData(T model)
        {
            var param = ToDicionary(generateGuid(model));
            var sqlCommand = "INSERT INTO {0} ({1}) VALUES ({2})";
            var length = param.Count;
            var paramNameTxt = "";
            var columnNameTxt = "";
            for (int i = 0; i < length; i++)
            {
                var item = param.ElementAt(i);
                var paramName = item.Key;
                paramNameTxt += $"@{paramName}";
                columnNameTxt += $"{paramName}";

                if (i < (length - 1))
                {
                    paramNameTxt += ",";
                    columnNameTxt += ",";
                }
            }
            paramNameTxt += ",@CreatedDate,@ModifiedDate";
            columnNameTxt += ",CreatedDate,ModifiedDate";
            param.Add("@CreatedDate", DateTime.Now);
            param.Add("@ModifiedDate", DateTime.Now);
            sqlCommand = string.Format(sqlCommand, _tableName, columnNameTxt, paramNameTxt);
            var res = _baseDA.ExecuteUsingCommandText(sqlCommand, param);
            _serviceResult.Data = res;
            if (res > 0)
            {
                _serviceResult = setServiceResult(true, res, Common.Properties.Resources.InsertSuccess);
            }
            else
            {
                _serviceResult = setServiceResult(false, res, Common.Properties.Resources.InsertFail);
            }
            return _serviceResult;
        }

        public ServiceResult UpdateData(T model)
        {
            var param = ToDicionary(model);
            var sqlCommand = "UPDATE {0} SET {1} WHERE id = @id;";
            var length = param.Count;
            var updateParamTxt = string.Empty;
            for (int i = 0; i < length; i++)
            {
                var item = param.ElementAt(i);
                var paramName = item.Key;

                if (paramName == "id")
                {
                    continue;
                }

                updateParamTxt += $"{paramName} = @{paramName}";

                if (i < (length - 1))
                {
                    updateParamTxt += ",";
                }
            }
            updateParamTxt += ", updated_at = @updated_at";
            param.Add("@updated_at", DateTime.Now);
            sqlCommand = string.Format(sqlCommand, _tableName, updateParamTxt);
            var res = _baseDA.ExecuteUsingCommandText(sqlCommand, param);
            _serviceResult.Data = res;
            if (res > 0)
            {
                _serviceResult = setServiceResult(true, res, Common.Properties.Resources.UpdateSuccess);
            }
            else
            {
                _serviceResult = setServiceResult(false, res, Common.Properties.Resources.UpdateFail);
            }
            return _serviceResult;
        }

        public ServiceResult UpdateMultipleData(List<T> model)
        {
            throw new NotImplementedException();
        }

        public ServiceResult DeleteData(int id)
        {
            var sqlCommand = $"DELETE FROM {_tableName} WHERE id = @id";
            var param = new Dictionary<string, object>();
            param.Add("@id", id);
            var res = _baseDA.ExecuteUsingCommandText(sqlCommand, param);
            _serviceResult.Data = res;
            if (res > 0)
            {
                _serviceResult = setServiceResult(true, res, Common.Properties.Resources.DeleteSuccess);
            }
            else
            {
                _serviceResult = setServiceResult(false, res, Common.Properties.Resources.DeleteFail);
            }
            return _serviceResult;
        }
        public ServiceResult DeleteMultipleData(List<int> ids)
        {
            var listId = string.Join(",", ids);
            var sqlCommand = $"DELETE FROM {_tableName} WHERE id IN ({listId})";
            var res = _baseDA.ExecuteUsingCommandText(sqlCommand);
            _serviceResult.Data = res;
            if (res > 0)
            {
                _serviceResult = setServiceResult(true, res, Common.Properties.Resources.DeleteSuccess);
            }
            else
            {
                _serviceResult = setServiceResult(false, res, Common.Properties.Resources.DeleteFail);

            }
            return _serviceResult;
        }

        /// <summary>
        /// Hàm chuyển đổi một model thành dictionary
        /// </summary>
        /// <param name="model">Model</param>
        /// <returns></returns>
        protected Dictionary<string, object> ToDicionary(T model)
        {
            var jsonObject = JsonConvert.SerializeObject(model, Formatting.Indented);
            return JsonConvert.DeserializeObject<Dictionary<string, object>>(jsonObject);
        }

        /// <summary>
        /// Hàm set giá trị service result
        /// </summary>
        /// <returns></returns>
        private ServiceResult setServiceResult(bool result, object data = null, string userMsg = null, string devMsg = null)
        {
            var serviceResult = new ServiceResult();
            serviceResult.Success = result;
            serviceResult.UserMessage = userMsg;
            serviceResult.DevMessage = devMsg;
            serviceResult.Data = data;
            return serviceResult;
        }

        /// <summary>
        /// gen uuid cho thuộc tính kiểu guid của đối tượng
        /// </summary>
        /// <returns></returns>
        private T generateGuid(T model)
        {
            var property = model.GetType().GetProperties().Where(x => x.PropertyType == typeof(Guid)).FirstOrDefault();
            if (property != null)
            {
                var propName = property.Name;
                model.GetType().GetProperty(propName).SetValue(model, Guid.NewGuid());
            }
            return model;
        }

    }
}
