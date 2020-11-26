class AccessesService
  def initialize(current_user)
    @current_user = current_user
  end

  def list_accesses
    if @current_user.admin?
      return Access.all
    end
    if @current_user.superuser?
      return Access.joins(:door).where("doors.domain = ?", @current_user.domain)
    end
    return Access.joins(:door, :user).where("doors.domain = ? and users.id = ?", @current_user.domain, @current_user.id)
  end
  
  def list_accesses_filter(initial_date, final_date) 
    return list_accesses.where("accesses.created_at >= ? and accesses.created_at <= ?" , 
      initial_date.change(hour:0, min:0, sec:0), 
      final_date.change(hour:23, min:59, sec:59) + 5.hours)
      #não sei pq diabos as datas são salvas com +5 horas. Assim, as vezes 
      #acabam caindo pro outro dia
  end
end