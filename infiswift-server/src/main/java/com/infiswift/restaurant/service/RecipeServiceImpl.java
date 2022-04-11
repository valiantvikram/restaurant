package com.infiswift.restaurant.service;

import java.io.IOException;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import oracle.jdbc.OracleTypes;

import com.infiswift.restaurant.model.RestaurantEntity;

@Service
public class RecipeServiceImpl implements RecipeService{
	

	@Autowired
	JdbcTemplate jdbcTemplate;

	@Override
	public List<Map<String, Object>> getMenu() throws IOException {
		// TODO Auto-generated method stub
		List<Map<String, Object>> resultMap = new ArrayList();
		String getDBCursorSql = "{call PKG_RCP_MAINT.PRC_GET_MENU(?)";
		ResultSet rs;
		
		try(Connection connection = jdbcTemplate.getDataSource().getConnection();
				CallableStatement callableStatement = connection.prepareCall(getDBCursorSql)){
			callableStatement.registerOutParameter(1, OracleTypes.CURSOR);
			callableStatement.executeUpdate();
			
			rs=(ResultSet)callableStatement.getObject(1);
			if(Objects.nonNull(rs)) {
				ResultSetMetaData metaData = rs.getMetaData();
				while(rs.next()) {
					Map<String,Object> recipe = new HashMap<String,Object>();
					for(int i=1; i<=metaData.getColumnCount();i++)
						recipe.put(metaData.getColumnName(i),rs.getString(i) );
					resultMap.add(recipe);
				}
			}
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return resultMap;
	}
	

	@Override
	public String insertMenu(List<RestaurantEntity> inputData) {
		String result = "Success";
		for(int i=0; i<inputData.size(); i++) {
			String getDBCursorSql = "{call PKG_RCP_MAINT.PRC_INS_MENU(?,?,?)";
			
			try(Connection connection = jdbcTemplate.getDataSource().getConnection();
					CallableStatement callableStatement = connection.prepareCall(getDBCursorSql)){
				callableStatement.setString(1, inputData.get(i).getRecipeName());
				callableStatement.setString(2, inputData.get(i).getRecipeType());
				callableStatement.setInt(3, inputData.get(i).getPrice());
				callableStatement.executeUpdate();
				}
				
			catch (SQLException e) {
				// TODO Auto-generated catch block
				result = "Fail";
				e.printStackTrace();
			}
		}
		return result;
	}
	
	@Override
	public String updateMenu(List<RestaurantEntity> inputData){
		String result = "Success";
		for(int i=0; i<inputData.size(); i++) {
			String getDBCursorSql = "{call PKG_RCP_MAINT.PRC_UPD_MENU(?,?,?,?)";
			
			try(Connection connection = jdbcTemplate.getDataSource().getConnection();
					CallableStatement callableStatement = connection.prepareCall(getDBCursorSql)){
				callableStatement.setInt(1, inputData.get(i).getRecipeKey());
				callableStatement.setString(2, inputData.get(i).getRecipeName());
				callableStatement.setString(3, inputData.get(i).getRecipeType());
				callableStatement.setInt(4, inputData.get(i).getPrice());
				callableStatement.executeUpdate();
				}
				
			catch (SQLException e) {
				// TODO Auto-generated catch block
				result = "Fail";
				e.printStackTrace();
			}
		}
		return result;
	}

	
	@Override
	public String deleteMenu(List<RestaurantEntity> inputData) {
		String result = "Success";
		for(int i=0; i<inputData.size(); i++) {
			String getDBCursorSql = "{call PKG_RCP_MAINT.PRC_DEL_MENU(?)";
			
			try(Connection connection = jdbcTemplate.getDataSource().getConnection();
					CallableStatement callableStatement = connection.prepareCall(getDBCursorSql)){
				callableStatement.setInt(1, inputData.get(i).getRecipeKey());
				callableStatement.executeUpdate();
				}
				
			catch (SQLException e) {
				// TODO Auto-generated catch block
				result = "Fail";
				e.printStackTrace();
			}
		}
		return result;
	}
	
	@Override
	public List<Map<String, Object>> getQuantity(int servings) {
		// TODO Auto-generated method stub
		List<Map<String, Object>> resultMap = new ArrayList();
		
		String getDBCursorSql = "{call PKG_RCP_MAINT.PRC_GET_INGRDIENT_QTY(?,?)";
		ResultSet rs;
		
		try(Connection connection = jdbcTemplate.getDataSource().getConnection();
				CallableStatement callableStatement = connection.prepareCall(getDBCursorSql)){
			callableStatement.setInt(1, servings);
			callableStatement.registerOutParameter(2, OracleTypes.CURSOR);
			callableStatement.executeUpdate();
			
			rs=(ResultSet)callableStatement.getObject(2);
			if(Objects.nonNull(rs)) {
				ResultSetMetaData metaData = rs.getMetaData();
				while(rs.next()) {
					Map<String,Object> recipe = new HashMap<String,Object>();
					for(int i=1; i<=metaData.getColumnCount();i++)
						recipe.put(metaData.getColumnName(i),rs.getString(i) );
					resultMap.add(recipe);
				}
			}
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return resultMap;
	}
	
	@Override
	public List<Map<String, Object>> getRecipeDetails(){
		// TODO Auto-generated method stub
		List<Map<String, Object>> resultMap = new ArrayList();
		String getDBCursorSql = "{call PKG_RCP_MAINT.PRC_GET_RCP_DTLS(?)";
		ResultSet rs;
		
		try(Connection connection = jdbcTemplate.getDataSource().getConnection();
				CallableStatement callableStatement = connection.prepareCall(getDBCursorSql)){
			callableStatement.registerOutParameter(1, OracleTypes.CURSOR);
			callableStatement.executeUpdate();
			
			rs=(ResultSet)callableStatement.getObject(1);
			if(Objects.nonNull(rs)) {
				ResultSetMetaData metaData = rs.getMetaData();
				while(rs.next()) {
					Map<String,Object> recipe = new HashMap<String,Object>();
					for(int i=1; i<=metaData.getColumnCount();i++)
						recipe.put(metaData.getColumnName(i),rs.getString(i) );
					resultMap.add(recipe);
				}
			}
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return resultMap;
	}

	@Override
	public String updateRecipeDetails(List<RestaurantEntity> inputData){
		String result = "Success";

		for(int i=0; i<inputData.size(); i++) {
			String getDBCursorSql = "{call PKG_RCP_MAINT.PRC_UPD_RCP_DTLS(?,?,?,?,?)";
			
			try(Connection connection = jdbcTemplate.getDataSource().getConnection();
					CallableStatement callableStatement = connection.prepareCall(getDBCursorSql)){
				callableStatement.setInt(1, inputData.get(i).getRecipeKey());
				callableStatement.setString(2, inputData.get(i).getRecipeName());
				callableStatement.setString(3, inputData.get(i).getIngredientName());
				callableStatement.setString(4, inputData.get(i).getIngredientMeasure());
				callableStatement.setInt(5, inputData.get(i).getIngredientQuant());
				callableStatement.executeUpdate();
				}
				
			catch (SQLException e) {
				// TODO Auto-generated catch block
				result = "Fail";
				e.printStackTrace();
			}
		}
		return result;
	}

	@Override
	public String insertRecipeDetails(List<RestaurantEntity> inputData) {
		String result = "Success";
		for(int i=0; i<inputData.size(); i++) {
			String getDBCursorSql = "{call PKG_RCP_MAINT.PRC_INS_RCP_DTLS(?,?,?,?)";
			
			try(Connection connection = jdbcTemplate.getDataSource().getConnection();
					CallableStatement callableStatement = connection.prepareCall(getDBCursorSql)){
				callableStatement.setString(1, inputData.get(i).getRecipeName());
				callableStatement.setString(2, inputData.get(i).getIngredientName());
				callableStatement.setString(3, inputData.get(i).getIngredientMeasure());
				callableStatement.setInt(4, inputData.get(i).getIngredientQuant());
				callableStatement.executeUpdate();
				}
				
			catch (SQLException e) {
				// TODO Auto-generated catch block
				result = "Fail";
				e.printStackTrace();
			}
		}
		return result;
	}

	@Override
	public String deleteRecipeDetails(List<RestaurantEntity> inputData) {
		String result = "Success";

		for(int i=0; i<inputData.size(); i++) {
			String getDBCursorSql = "{call PKG_RCP_MAINT.PRC_DEL_RCP_DTLS(?)";
			
			try(Connection connection = jdbcTemplate.getDataSource().getConnection();
					CallableStatement callableStatement = connection.prepareCall(getDBCursorSql)){
				callableStatement.setInt(1, inputData.get(i).getRecipeKey());
				callableStatement.executeUpdate();
				}
				
			catch (SQLException e) {
				// TODO Auto-generated catch block
				result = "Fail";
				e.printStackTrace();
			}
		}
		return result;
	}

}
