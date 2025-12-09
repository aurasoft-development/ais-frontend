const TrustBadge = ({ icon: Icon, title, description }) => {
    return (<div className="flex flex-col items-center text-center p-4 md:p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
      <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
        <Icon className="w-7 h-7 md:w-8 md:h-8 text-primary group-hover:text-accent-foreground transition-colors"/>
      </div>
      <h3 className="font-display text-base md:text-lg font-bold text-foreground mb-1">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>);
};
export default TrustBadge;
